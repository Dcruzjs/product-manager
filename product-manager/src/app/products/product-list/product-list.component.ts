import { Component, Input, OnInit } from '@angular/core';
import { Product, ProductsResponse } from '../interface/Product.interface';
import { ProductService } from '../product.service';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})

export class ProductListComponent implements OnInit {
  
  products$: Observable<ProductsResponse> | undefined;
  constructor(
    private productService:ProductService,
    private _router:Router,
    private _route:ActivatedRoute) { 
  }

  deleteProduct($event:any):void{
    console.log($event.target.id)
    // $event.target.closest('.product').remove()
    this.productService.deleteProduct($event.target.id).subscribe(
      (data:any) => {
        console.log(data)
        this.products$ = this.productService.getProducts()
        this._router.navigate(['list'])
      }
    )
  }

  ngOnInit(): void {
    this.products$ = this.productService.getProducts()
  }

}
