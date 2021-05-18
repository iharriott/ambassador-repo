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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const redis_service_1 = require("../shared/redis.service");
const auth_guard_1 = require("../auth/auth.guard");
const user_service_1 = require("./user.service");
let UserController = class UserController {
    constructor(userService, redisService) {
        this.userService = userService;
        this.redisService = redisService;
    }
    async ambassadors() {
        return this.userService.find({ is_ambassador: true });
    }
    async rankings(response) {
        const client = this.redisService.getClient();
        client.zrevrangebyscore('rankings', '+inf', '-inf', 'withscores', (err, result) => {
            let score;
            response.send(result.reduce((o, r) => {
                if (isNaN(parseInt(r))) {
                    return Object.assign(Object.assign({}, o), { [r]: score });
                }
                else {
                    score = parseInt(r);
                    return o;
                }
            }, {}));
        });
    }
};
__decorate([
    common_1.Get('admin/ambassadors'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "ambassadors", null);
__decorate([
    common_1.Get('ambassador/rankings'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "rankings", null);
UserController = __decorate([
    common_1.UseGuards(auth_guard_1.AuthGuard),
    common_1.Controller(),
    common_1.UseInterceptors(common_1.ClassSerializerInterceptor),
    __metadata("design:paramtypes", [user_service_1.UserService,
        redis_service_1.RedisService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map