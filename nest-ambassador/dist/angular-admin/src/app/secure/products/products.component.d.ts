import { AfterViewInit, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from '../../../app/services/product.service';
export declare class ProductsComponent implements OnInit, AfterViewInit {
    private productService;
    columns: string[];
    dataSource: MatTableDataSource<unknown>;
    paginator: MatPaginator;
    constructor(productService: ProductService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    delete(id: number): void;
}
