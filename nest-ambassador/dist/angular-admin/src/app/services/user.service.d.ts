import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
export declare class UserService {
    private http;
    endpoint: string;
    constructor(http: HttpClient);
    all(): Observable<User[]>;
}
