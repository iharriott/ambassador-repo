import { OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../../../app/interfaces/order';
import { LinkService } from '../../../app/services/link.service';
export declare class LinksComponent implements OnInit {
    private linkService;
    private route;
    constructor(linkService: LinkService, route: ActivatedRoute);
    columns: string[];
    dataSource: MatTableDataSource<unknown>;
    id: number;
    ngOnInit(): void;
    sum(orders: Order[]): number;
}
