import { Controller, Get, ClassSerializerInterceptor, UseInterceptors, UseGuards, Res } from '@nestjs/common';
import { RedisService } from '../shared/redis.service';
import { AuthGuard } from '../auth/auth.guard';
//import { User } from './user';
import { UserService } from './user.service';
import { Response } from "express"


@UseGuards(AuthGuard)
@Controller()
@UseInterceptors(ClassSerializerInterceptor)
export class UserController {

    constructor(private userService: UserService,
        private redisService: RedisService) { }


    @Get('admin/ambassadors')
    async ambassadors() {
        return this.userService.find({ is_ambassador: true });
    }

    @Get('ambassador/rankings')
    async rankings(@Res() response: Response) {
        // const ambassadors: User[] = await this.userService.find({
        //     is_ambassador: true,
        //     relations: ['orders:', 'orders.order_items']
        // });

        // return ambassadors.map(ambassador => {
        //     return {
        //         name: ambassador.name,
        //         revenue: ambassador.revenue
        //     }
        // })

        const client = this.redisService.getClient();
        client.zrevrangebyscore('rankings', '+inf', '-inf', 'withscores', (err, result) => {
            // const arr =[];

            // for(let i =0; i < result.length; i +=2){
            //    arr[result[i]] = result[i+1];
            // }
            let score;
            response.send(result.reduce((o, r) => {
                if (isNaN(parseInt(r))) {
                    return {
                        ...o,
                        [r]: score
                    }
                } else {
                    score = parseInt(r);
                    return o;
                }
            }, {}))
        });
    }
}
