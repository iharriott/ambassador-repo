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
exports.ProfileComponent = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const router_1 = require("@angular/router");
const emitters_1 = require("../../../app/emitters/emitters");
const auth_service_1 = require("../../../app/services/auth.service");
let ProfileComponent = class ProfileComponent {
    constructor(formBuilder, router, authService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
    }
    ngOnInit() {
        this.infoForm = this.formBuilder.group({
            first_name: '',
            last_name: '',
            email: ''
        });
        this.passwordForm = this.formBuilder.group({
            password: '',
            password_confirm: ''
        });
        emitters_1.Emitters.authEmitter.subscribe(user => {
            this.infoForm.patchValue(user);
        });
    }
    infoSubmit() {
        this.authService.updateInfo(this.infoForm.getRawValue())
            .subscribe(user => {
            emitters_1.Emitters.authEmitter.emit(user);
        });
    }
    passwordSubmit() {
        this.authService.updatePassword(this.passwordForm.getRawValue())
            .subscribe(user => console.log(user));
    }
};
ProfileComponent = __decorate([
    core_1.Component({
        selector: 'app-profile',
        templateUrl: './profile.component.html',
        styleUrls: ['./profile.component.css']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        router_1.Router,
        auth_service_1.AuthService])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map