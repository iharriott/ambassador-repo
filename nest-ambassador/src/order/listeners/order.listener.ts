import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";
import { OnEvent } from "@nestjs/event-emitter";
import { RedisService } from "../../shared/redis.service";
import { Order } from "../order";

@Injectable()
export class OrderListener {

    constructor(private redisService: RedisService,
        private mailerService: MailerService) { }

    @OnEvent('order_completed')
    async handleOrderCompletedEvent(order: Order) {
        //console.log(order);
        //console.log('order event emitted' + order.ambassador_revenue + ',' + order.user.name);
        const client = this.redisService.getClient();
        client.ZINCRBY('rankings', order.ambassador_revenue, order.user.name);

        await this.mailerService.sendMail({
            to: 'ianharriott11@gmail.com',
            subject: 'Your orders has been completed',
            html: `Order #${order.id} with a total of $${order.total} has been completed`
        });

        await this.mailerService.sendMail({
            to: 'ianharriott11@gmail.com',
            subject: 'Your orders has been completed',
            html: `You earned $${order.ambassador_revenue} from the link ${order.code}`
        });


    }

}