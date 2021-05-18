import { OnInit } from '@angular/core';
import { OrderService } from '../../../app/services/order.service';
export declare class OrdersComponent implements OnInit {
    private orderService;
    orders: any[];
    constructor(orderService: OrderService);
    ngOnInit(): void;
}
