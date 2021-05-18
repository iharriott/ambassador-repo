"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecureModule = void 0;
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const secure_component_1 = require("./secure.component");
const nav_component_1 = require("./nav/nav.component");
const menu_component_1 = require("./menu/menu.component");
const router_1 = require("@angular/router");
const profile_component_1 = require("./profile/profile.component");
const users_component_1 = require("./users/users.component");
const forms_1 = require("@angular/forms");
const table_1 = require("@angular/material/table");
const paginator_1 = require("@angular/material/paginator");
const links_component_1 = require("./links/links.component");
const button_1 = require("@angular/material/button");
const products_component_1 = require("./products/products.component");
const products_form_component_1 = require("./products/products-form/products-form.component");
const form_field_1 = require("@angular/material/form-field");
const input_1 = require("@angular/material/input");
const button_toggle_1 = require("@angular/material/button-toggle");
const orders_component_1 = require("./orders/orders.component");
const expansion_1 = require("@angular/material/expansion");
let SecureModule = class SecureModule {
};
SecureModule = __decorate([
    core_1.NgModule({
        declarations: [
            secure_component_1.SecureComponent,
            nav_component_1.NavComponent,
            menu_component_1.MenuComponent,
            profile_component_1.ProfileComponent,
            users_component_1.UsersComponent,
            links_component_1.LinksComponent,
            products_component_1.ProductsComponent,
            products_form_component_1.ProductsFormComponent,
            orders_component_1.OrdersComponent
        ],
        imports: [
            common_1.CommonModule,
            router_1.RouterModule,
            forms_1.ReactiveFormsModule,
            table_1.MatTableModule,
            paginator_1.MatPaginatorModule,
            button_1.MatButtonModule,
            form_field_1.MatFormFieldModule,
            input_1.MatInputModule,
            button_toggle_1.MatButtonToggleModule,
            expansion_1.MatExpansionModule
        ]
    })
], SecureModule);
exports.SecureModule = SecureModule;
//# sourceMappingURL=secure.module.js.map