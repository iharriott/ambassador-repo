import { RedisService } from '../shared/redis.service';
import { UserService } from './user.service';
import { Response } from "express";
export declare class UserController {
    private userService;
    private redisService;
    constructor(userService: UserService, redisService: RedisService);
    ambassadors(): Promise<any[]>;
    rankings(response: Response): Promise<void>;
}
