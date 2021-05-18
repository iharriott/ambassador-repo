import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../../app/services/product.service';
export declare class ProductsFormComponent implements OnInit {
    private formBuilder;
    private productService;
    private router;
    private route;
    form: FormGroup;
    create: boolean;
    id: number;
    constructor(formBuilder: FormBuilder, productService: ProductService, router: Router, route: ActivatedRoute);
    ngOnInit(): void;
    submit(): void;
}
