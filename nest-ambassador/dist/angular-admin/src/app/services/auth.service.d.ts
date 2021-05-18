import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
export declare class AuthService {
    private http;
    constructor(http: HttpClient);
    register(data: any): Observable<User>;
    login(data: any): Observable<any>;
    user(): Observable<User>;
    logout(): Observable<any>;
    updateInfo(data: any): Observable<User>;
    updatePassword(data: any): Observable<User>;
}
