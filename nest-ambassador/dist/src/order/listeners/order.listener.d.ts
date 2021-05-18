import { MailerService } from "@nestjs-modules/mailer";
import { RedisService } from "../../shared/redis.service";
import { Order } from "../order";
export declare class OrderListener {
    private redisService;
    private mailerService;
    constructor(redisService: RedisService, mailerService: MailerService);
    handleOrderCompletedEvent(order: Order): Promise<void>;
}
