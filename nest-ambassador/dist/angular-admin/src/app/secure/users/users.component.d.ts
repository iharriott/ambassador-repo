import { AfterViewInit, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../../../app/services/user.service';
export declare class UsersComponent implements OnInit, AfterViewInit {
    private userService;
    constructor(userService: UserService);
    columns: string[];
    dataSource: MatTableDataSource<unknown>;
    paginator: MatPaginator;
    ngOnInit(): void;
    ngAfterViewInit(): void;
}
