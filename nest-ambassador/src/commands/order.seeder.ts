import { NestFactory } from "@nestjs/core";
import { AppModule } from "../app.module";
import * as faker from "faker";
import { OrderService } from "../order/order.service";
import { OrderItemService } from "../order/order-item.service";


(async () => {

    const app = await NestFactory.createApplicationContext(AppModule);

    const orderService = app.get(OrderService);
    const orderItemService = app.get(OrderItemService);

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
            })
        }
    }

    process.exit();
})();