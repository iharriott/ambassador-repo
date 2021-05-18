"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const router_1 = require("@angular/router");
const app_routing_module_1 = require("./app-routing.module");
const app_component_1 = require("./app.component");
const public_module_1 = require("./public/public.module");
const secure_module_1 = require("./secure/secure.module");
const http_1 = require("@angular/common/http");
const credential_interceptor_1 = require("./interceptors/credential.interceptor");
const animations_1 = require("@angular/platform-browser/animations");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
        ],
        imports: [
            platform_browser_1.BrowserModule,
            app_routing_module_1.AppRoutingModule,
            public_module_1.PublicModule,
            secure_module_1.SecureModule,
            router_1.RouterModule,
            http_1.HttpClientModule,
            animations_1.BrowserAnimationsModule
        ],
        providers: [
            {
                provide: http_1.HTTP_INTERCEPTORS,
                useClass: credential_interceptor_1.CredentialInterceptor,
                multi: true
            }
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map