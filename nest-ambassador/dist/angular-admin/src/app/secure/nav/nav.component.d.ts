import { OnInit } from '@angular/core';
import { User } from '../../../app/interfaces/user';
import { AuthService } from '../../../app/services/auth.service';
export declare class NavComponent implements OnInit {
    private authService;
    constructor(authService: AuthService);
    user: User;
    ngOnInit(): void;
    logout(): void;
}
