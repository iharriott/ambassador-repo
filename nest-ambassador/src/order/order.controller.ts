import { Controller, Get, Body, Delete, Param, Post, Put, ClassSerializerInterceptor, UseInterceptors, UseGuards, BadRequestException, NotFoundException } from '@nestjs/common';
import { LinkService } from '../link/link.service';
import { AuthGuard } from '../auth/auth.guard';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderService } from './order.service';
import { Link } from '../link/link';
import { Order } from './order';
import { ProductService } from '../product/product.service';
import { Product } from '../product/product';
import { OrderItem } from './order-item';
import { OrderItemService } from './order-item.service';
import { Connection } from 'typeorm';
import { InjectStripe } from 'nestjs-stripe';
import Stripe from 'stripe';
import { ConfigService } from '@nestjs/config';
import { EventEmitter2 } from 'eventemitter2';

@Controller()
export class OrderController {

    constructor(private readonly orderService: OrderService,
        private linkService: LinkService,
        private productService: ProductService,
        private orderItemServie: OrderItemService,
        private connection: Connection,
        @InjectStripe() private readonly stripeClient: Stripe,
        private configService: ConfigService,
        private eventEmitter: EventEmitter2) { }

    @UseGuards(AuthGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    @Get('admin/orders')
    async all() {
        return this.orderService.find({ relations: ['order_items'] });
    }

    @Post('checkout/orders')
    async create(@Body() body: CreateOrderDto) {
        const link: Link = await this.linkService.findOne({
            code: body.code,
            relations: ['user']
        })

        if (!link) {
            throw new BadRequestException('Invalid link!');
        }

        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();

        try {
            const o = new Order();
            o.user_id = link.user.id;
            o.ambassador_email = link.user.email;
            o.first_name = body.first_name;
            o.last_name = body.last_name;
            o.email = body.email;
            o.address = body.address;
            o.country = body.country;
            o.city = body.city;
            o.zip = body.zip;
            o.code = body.code

            //const order = await this.orderService.save(o);
            const order = await queryRunner.manager.save(o);

            const line_items = [];

            // console.log(order);
            // console.log(body.products);

            for (let p of body.products) {
                //console.log(p.product_id);
                const product: Product = await this.productService.findOne({ id: p.product_id })
                //console.log(product);

                const orderItem = new OrderItem();
                orderItem.order = order;
                orderItem.product_title = product.title;
                orderItem.price = product.price;
                orderItem.quantity = p.quantity;
                orderItem.ambassador_revenue = 0.1 * product.price * p.quantity;
                orderItem.admin_revenue = 0.9 * product.price * p.quantity;

                //throw new BadRequestException();

                //await this.orderItemServie.save(orderItem);
                await queryRunner.manager.save(orderItem);

                line_items.push({
                    name: product.title,
                    description: product.description,
                    images: [product.image],
                    amount: 100 * product.price,
                    currency: 'usd',
                    quantity: p.quantity

                })
            }

            //console.log(line_items);

            const source = await this.stripeClient.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items,
                success_url: `${this.configService.get('CHECKOUT_URL')}/success?source={CHECKOUT_SESSION_ID}`,
                cancel_url: `${this.configService.get('CHECKOUT_URL')}/error`
            });

            //console.log(source);

            order.transaction_id = source['id'];
            await queryRunner.manager.save(order);

            await queryRunner.commitTransaction();

            return source;

        } catch (e) {

            await queryRunner.rollbackTransaction();
            console.log(e);
            throw new BadRequestException();

        } finally {
            await queryRunner.release();
        }
    }

    @Post('checkout/orders/confirm')
    async confirm(@Body('source') source: string) {
        const order = await this.orderService.findOne({
            where: { transaction_id: source },
            relations: ['order_items', 'user']
        });

        if (!order) {
            throw new NotFoundException('Order not found');
        }

        await this.orderService.update(order.id, { complete: true });

        //console.log('order in confirm' + order)

        this.eventEmitter.emit('order_completed', order);

        return {
            message: 'success'
        }

    }

}
