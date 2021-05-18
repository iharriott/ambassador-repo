"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutingModule = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const login_component_1 = require("./public/login/login.component");
const public_component_1 = require("./public/public.component");
const register_component_1 = require("./public/register/register.component");
const links_component_1 = require("./secure/links/links.component");
const orders_component_1 = require("./secure/orders/orders.component");
const products_form_component_1 = require("./secure/products/products-form/products-form.component");
const products_component_1 = require("./secure/products/products.component");
const profile_component_1 = require("./secure/profile/profile.component");
const secure_component_1 = require("./secure/secure.component");
const users_component_1 = require("./secure/users/users.component");
const routes = [
    {
        path: '',
        component: secure_component_1.SecureComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: '/users' },
            { path: 'profile', component: profile_component_1.ProfileComponent },
            { path: 'users', component: users_component_1.UsersComponent },
            { path: 'users/:id/links', component: links_component_1.LinksComponent },
            { path: 'products', component: products_component_1.ProductsComponent },
            { path: 'products/create', component: products_form_component_1.ProductsFormComponent, data: { create: true } },
            { path: 'products/:id/edit', component: products_form_component_1.ProductsFormComponent, data: { create: false } },
            { path: 'orders', component: orders_component_1.OrdersComponent },
        ]
    },
    {
        path: '',
        component: public_component_1.PublicComponent,
        children: [
            { path: 'login', component: login_component_1.LoginComponent },
            { path: 'register', component: register_component_1.RegisterComponent }
        ]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map