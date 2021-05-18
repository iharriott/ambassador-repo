import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Link } from '../interfaces/link';
export declare class LinkService {
    private http;
    constructor(http: HttpClient);
    all(id: number): Observable<Link[]>;
}
