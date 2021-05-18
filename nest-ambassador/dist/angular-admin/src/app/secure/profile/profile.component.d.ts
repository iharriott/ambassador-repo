import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../app/services/auth.service';
export declare class ProfileComponent implements OnInit {
    private formBuilder;
    private router;
    private authService;
    constructor(formBuilder: FormBuilder, router: Router, authService: AuthService);
    infoForm: FormGroup;
    passwordForm: FormGroup;
    ngOnInit(): void;
    infoSubmit(): void;
    passwordSubmit(): void;
}
