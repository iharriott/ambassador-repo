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
exports.PublicComponent = void 0;
const core_1 = require("@angular/core");
let PublicComponent = class PublicComponent {
    constructor() { }
    ngOnInit() {
    }
};
PublicComponent = __decorate([
    core_1.Component({
        selector: 'app-public',
        templateUrl: './public.component.html',
        styleUrls: ['./public.component.css']
    }),
    __metadata("design:paramtypes", [])
], PublicComponent);
exports.PublicComponent = PublicComponent;
//# sourceMappingURL=public.component.js.map