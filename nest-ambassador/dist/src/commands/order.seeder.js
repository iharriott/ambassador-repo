"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("../app.module");
const faker = require("faker");
const order_service_1 = require("../order/order.service");
const order_item_service_1 = require("../order/order-item.service");
(async () => {
    const app = await core_1.NestFactory.createApplicationContext(app_module_1.AppModule);
    const orderService = app.get(order_service_1.OrderService);
    const orderItemService = app.get(order_item_service_1.OrderItemService);
    for (let i = 0; i < 30; i++) {
        const order = await orderService.save({
            user_id: Math.floor((Math.random() * 40) + 10),
            code: faker.lorem.slug(2),
            ambassador_email: faker.internet.email(),
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            email: faker.internet.email(),
            complete: true
        });
        for (let j = 0; j < Math.floor((Math.random() * 5) + 1); j++) {
            await orderItemService.save({
                order,
                product_title: faker.lorem.words(2),
                price: Math.floor((Math.random() * 100) + 10),
                quantity: Math.floor((Math.random() * 5) + 1),
                admin_revenue: Math.floor((Math.random() * 100) + 10),
                ambassador_revenue: Math.floor((Math.random() * 10) + 1),
            });
        }
    }
    process.exit();
})();
//# sourceMappingURL=order.seeder.js.map