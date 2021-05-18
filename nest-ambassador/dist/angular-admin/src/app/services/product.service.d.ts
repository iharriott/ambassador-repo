import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';
export declare class ProductService {
    private http;
    endpoint: string;
    constructor(http: HttpClient);
    all(): Observable<Product[]>;
    create(data: any): Observable<Product>;
    get(id: number): Observable<Product>;
    update(id: number, data: any): Observable<Product>;
    delete(id: number): Observable<void>;
}
