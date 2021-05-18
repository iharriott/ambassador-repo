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
exports.ProductsFormComponent = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const router_1 = require("@angular/router");
const product_service_1 = require("../../../../app/services/product.service");
let ProductsFormComponent = class ProductsFormComponent {
    constructor(formBuilder, productService, router, route) {
        this.formBuilder = formBuilder;
        this.productService = productService;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            title: '',
            description: '',
            image: '',
            price: ''
        });
        this.create = this.route.snapshot.data.create;
        if (!this.create) {
            this.id = this.route.snapshot.params.id;
            this.productService.get(this.id).subscribe(product => {
                this.form.patchValue(product);
            });
        }
    }
    submit() {
        const method = this.create ? this.productService.create(this.form.getRawValue())
            : this.productService.update(this.id, this.form.getRawValue());
        method.subscribe(() => {
            this.router.navigate(['/products']);
        });
    }
};
ProductsFormComponent = __decorate([
    core_1.Component({
        selector: 'app-products-form',
        templateUrl: './products-form.component.html',
        styleUrls: ['./products-form.component.css']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        product_service_1.ProductService,
        router_1.Router,
        router_1.ActivatedRoute])
], ProductsFormComponent);
exports.ProductsFormComponent = ProductsFormComponent;
//# sourceMappingURL=products-form.component.js.map