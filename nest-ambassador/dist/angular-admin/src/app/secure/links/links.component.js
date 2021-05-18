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
exports.LinksComponent = void 0;
const core_1 = require("@angular/core");
const table_1 = require("@angular/material/table");
const router_1 = require("@angular/router");
const link_service_1 = require("../../../app/services/link.service");
let LinksComponent = class LinksComponent {
    constructor(linkService, route) {
        this.linkService = linkService;
        this.route = route;
        this.columns = ['ID', 'code', 'count', 'revenue'];
        this.dataSource = new table_1.MatTableDataSource();
    }
    ngOnInit() {
        this.id = this.route.snapshot.params.id;
        alert(this.id);
        this.linkService.all(this.id).subscribe(links => {
            this.dataSource.data = links;
        });
    }
    sum(orders) {
        return orders.reduce((s, o) => s + o.total, 0);
    }
};
LinksComponent = __decorate([
    core_1.Component({
        selector: 'app-links',
        templateUrl: './links.component.html',
        styleUrls: ['./links.component.css']
    }),
    __metadata("design:paramtypes", [link_service_1.LinkService,
        router_1.ActivatedRoute])
], LinksComponent);
exports.LinksComponent = LinksComponent;
//# sourceMappingURL=links.component.js.map