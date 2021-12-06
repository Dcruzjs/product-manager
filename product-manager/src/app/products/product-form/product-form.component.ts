import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, ProductResponse } from '../interface/Product.interface';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
})

export class ProductFormComponent implements OnInit {

  product:Product = {
    name:"",
    price:0,
    imageUrl:""
  }

  constructor(
    private productService:ProductService,
    private _router:Router,
    private _route:ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  createProduct(){
    console.log("creating product")
    this.productService.createProduct(this.product).subscribe((data:ProductResponse) =>{
      console.log(data)
      this._router.navigate(["list"])
    })

  }

}
