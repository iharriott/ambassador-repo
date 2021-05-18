import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';
import { AuthService } from '../services/auth.service';
export declare class SecureComponent implements OnInit {
    private authService;
    private router;
    constructor(authService: AuthService, router: Router);
    user: User;
    ngOnInit(): void;
}
