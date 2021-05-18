"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const common_1 = require("@nestjs/common");
const link_service_1 = require("../link/link.service");
const auth_guard_1 = require("../auth/auth.guard");
const create_order_dto_1 = require("./dto/create-order.dto");
const order_service_1 = require("./order.service");
const order_1 = require("./order");
const product_service_1 = require("../product/product.service");
const order_item_1 = require("./order-item");
const order_item_service_1 = require("./order-item.service");
const typeorm_1 = require("typeorm");
const nestjs_stripe_1 = require("nestjs-stripe");
const stripe_1 = require("stripe");
const config_1 = require("@nestjs/config");
const eventemitter2_1 = require("eventemitter2");
let OrderController = class OrderController {
    constructor(orderService, linkService, productService, orderItemServie, connection, stripeClient, configService, eventEmitter) {
        this.orderService = orderService;
        this.linkService = linkService;
        this.productService = productService;
        this.orderItemServie = orderItemServie;
        this.connection = connection;
        this.stripeClient = stripeClient;
        this.configService = configService;
        this.eventEmitter = eventEmitter;
    }
    async all() {
        return this.orderService.find({ relations: ['order_items'] });
    }
    async create(body) {
        const link = await this.linkService.findOne({
            code: body.code,
            relations: ['user']
        });
        if (!link) {
            throw new common_1.BadRequestException('Invalid link!');
        }
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const o = new order_1.Order();
            o.user_id = link.user.id;
            o.ambassador_email = link.user.email;
            o.first_name = body.first_name;
            o.last_name = body.last_name;
            o.email = body.email;
            o.address = body.address;
            o.country = body.country;
            o.city = body.city;
            o.zip = body.zip;
            o.code = body.code;
            const order = await queryRunner.manager.save(o);
            const line_items = [];
            for (let p of body.products) {
                const product = await this.productService.findOne({ id: p.product_id });
                const orderItem = new order_item_1.OrderItem();
                orderItem.order = order;
                orderItem.product_title = product.title;
                orderItem.price = product.price;
                orderItem.quantity = p.quantity;
                orderItem.ambassador_revenue = 0.1 * product.price * p.quantity;
                orderItem.admin_revenue = 0.9 * product.price * p.quantity;
                await queryRunner.manager.save(orderItem);
                line_items.push({
                    name: product.title,
                    description: product.description,
                    images: [product.image],
                    amount: 100 * product.price,
                    currency: 'usd',
                    quantity: p.quantity
                });
            }
            const source = await this.stripeClient.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items,
                success_url: `${this.configService.get('CHECKOUT_URL')}/success?source={CHECKOUT_SESSION_ID}`,
                cancel_url: `${this.configService.get('CHECKOUT_URL')}/error`
            });
            order.transaction_id = source['id'];
            await queryRunner.manager.save(order);
            await queryRunner.commitTransaction();
            return source;
        }
        catch (e) {
            await queryRunner.rollbackTransaction();
            console.log(e);
            throw new common_1.BadRequestException();
        }
        finally {
            await queryRunner.release();
        }
    }
    async confirm(source) {
        const order = await this.orderService.findOne({
            where: { transaction_id: source },
            relations: ['order_items', 'user']
        });
        if (!order) {
            throw new common_1.NotFoundException('Order not found');
        }
        await this.orderService.update(order.id, { complete: true });
        this.eventEmitter.emit('order_completed', order);
        return {
            message: 'success'
        };
    }
};
__decorate([
    common_1.UseGuards(auth_guard_1.AuthGuard),
    common_1.UseInterceptors(common_1.ClassSerializerInterceptor),
    common_1.Get('admin/orders'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "all", null);
__decorate([
    common_1.Post('checkout/orders'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_order_dto_1.CreateOrderDto]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "create", null);
__decorate([
    common_1.Post('checkout/orders/confirm'),
    __param(0, common_1.Body('source')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "confirm", null);
OrderController = __decorate([
    common_1.Controller(),
    __param(5, nestjs_stripe_1.InjectStripe()),
    __metadata("design:paramtypes", [order_service_1.OrderService,
        link_service_1.LinkService,
        product_service_1.ProductService,
        order_item_service_1.OrderItemService,
        typeorm_1.Connection,
        stripe_1.default,
        config_1.ConfigService,
        eventemitter2_1.EventEmitter2])
], OrderController);
exports.OrderController = OrderController;
//# sourceMappingURL=order.controller.js.map