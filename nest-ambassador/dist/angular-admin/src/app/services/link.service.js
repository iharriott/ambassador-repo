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
exports.LinkService = void 0;
const http_1 = require("@angular/common/http");
const core_1 = require("@angular/core");
const environment_1 = require("../../environments/environment");
let LinkService = class LinkService {
    constructor(http) {
        this.http = http;
    }
    all(id) {
        const env = `${environment_1.environment.api}/users/${id}/links`;
        alert('url is  ' + env);
        return this.http.get(`${environment_1.environment.api}/users/${id}/links`);
    }
};
LinkService = __decorate([
    core_1.Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [http_1.HttpClient])
], LinkService);
exports.LinkService = LinkService;
//# sourceMappingURL=link.service.js.map