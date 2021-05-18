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
exports.ProductsComponent = void 0;
const core_1 = require("@angular/core");
const paginator_1 = require("@angular/material/paginator");
const table_1 = require("@angular/material/table");
const product_service_1 = require("../../../app/services/product.service");
let ProductsComponent = class ProductsComponent {
    constructor(productService) {
        this.productService = productService;
        this.columns = ['ID', 'image', 'title', 'description', 'price', 'action'];
        this.dataSource = new table_1.MatTableDataSource();
    }
    ngOnInit() {
        this.productService.all().subscribe(products => {
            this.dataSource.data = products;
        });
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
    delete(id) {
        if (confirm('Are you sure?')) {
            this.productService.delete(id).subscribe(() => {
                this.dataSource.data = this.dataSource.data.filter((p) => p.id !== id);
            });
        }
    }
};
__decorate([
    core_1.ViewChild(paginator_1.MatPaginator),
    __metadata("design:type", paginator_1.MatPaginator)
], ProductsComponent.prototype, "paginator", void 0);
ProductsComponent = __decorate([
    core_1.Component({
        selector: 'app-products',
        templateUrl: './products.component.html',
        styleUrls: ['./products.component.css']
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductsComponent);
exports.ProductsComponent = ProductsComponent;
//# sourceMappingURL=products.component.js.map