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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecureComponent = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const emitters_1 = require("../emitters/emitters");
const auth_service_1 = require("../services/auth.service");
let SecureComponent = class SecureComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        this.authService.user().subscribe(user => {
            emitters_1.Emitters.authEmitter.emit(user);
        }, () => {
            emitters_1.Emitters.authEmitter.emit(null);
            this.router.navigate(['/login']);
        });
    }
};
SecureComponent = __decorate([
    core_1.Component({
        selector: 'app-secure',
        templateUrl: './secure.component.html',
        styleUrls: ['./secure.component.css']
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        router_1.Router])
], SecureComponent);
exports.SecureComponent = SecureComponent;
//# sourceMappingURL=secure.component.js.map