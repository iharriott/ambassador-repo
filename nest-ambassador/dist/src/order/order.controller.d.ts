import { LinkService } from '../link/link.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderService } from './order.service';
import { ProductService } from '../product/product.service';
import { OrderItemService } from './order-item.service';
import { Connection } from 'typeorm';
import Stripe from 'stripe';
import { ConfigService } from '@nestjs/config';
import { EventEmitter2 } from 'eventemitter2';
export declare class OrderController {
    private readonly orderService;
    private linkService;
    private productService;
    private orderItemServie;
    private connection;
    private readonly stripeClient;
    private configService;
    private eventEmitter;
    constructor(orderService: OrderService, linkService: LinkService, productService: ProductService, orderItemServie: OrderItemService, connection: Connection, stripeClient: Stripe, configService: ConfigService, eventEmitter: EventEmitter2);
    all(): Promise<any[]>;
    create(body: CreateOrderDto): Promise<Stripe.Response<Stripe.Checkout.Session>>;
    confirm(source: string): Promise<{
        message: string;
    }>;
}
