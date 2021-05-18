"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicModule = void 0;
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const public_component_1 = require("./public.component");
const login_component_1 = require("./login/login.component");
const register_component_1 = require("./register/register.component");
const router_1 = require("@angular/router");
const forms_1 = require("@angular/forms");
let PublicModule = class PublicModule {
};
PublicModule = __decorate([
    core_1.NgModule({
        declarations: [
            public_component_1.PublicComponent,
            login_component_1.LoginComponent,
            register_component_1.RegisterComponent
        ],
        imports: [
            common_1.CommonModule,
            router_1.RouterModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule
        ]
    })
], PublicModule);
exports.PublicModule = PublicModule;
//# sourceMappingURL=public.module.js.map