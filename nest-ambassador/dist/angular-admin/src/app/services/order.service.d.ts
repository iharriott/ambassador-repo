import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../interfaces/order';
export declare class OrderService {
    private http;
    endpoint: string;
    constructor(http: HttpClient);
    all(): Observable<Order[]>;
}
