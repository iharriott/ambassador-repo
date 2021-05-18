import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../app/services/auth.service';
export declare class LoginComponent implements OnInit {
    private formBuilder;
    private authService;
    private router;
    constructor(formBuilder: FormBuilder, authService: AuthService, router: Router);
    form: FormGroup;
    ngOnInit(): void;
    submit(): void;
}
