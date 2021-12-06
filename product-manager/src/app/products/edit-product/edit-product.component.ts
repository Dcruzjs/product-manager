import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ProductDB, ProductResponse } from '../interface/Product.interface';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
})
export class EditProductComponent implements OnInit {
  errorMsg:string = ""
  product:ProductDB = {
    _id:"",
    name:"",
    price:0,
    imageUrl:"",
    createdAt:new Date(),
    updatedAt:new Date(),
    __v:0,
  }

  constructor(
    private productService:ProductService,
    private _router:Router,
    private _route:ActivatedRoute
  ) { 

}

ngOnInit(): void {
    this._route.params.pipe( switchMap(({id})=> this.productService.getProduct(id)) )
    .subscribe( (resp:ProductResponse) => {
      console.log("Product Received: ", resp.product._id );
      this.product = resp.product
    
    },
      (error)=> {
        error.statusText === "Not Found" ? this.errorMsg = `That Product was not Found in the Database.`: ""
      }
    );
  
  }

  updateProduct(){
    console.log("updating product")
    this.productService.updateProduct(this.product._id, this.product ).subscribe((data:ProductResponse) => {
      console.log(data)
      this._router.navigate(["list"])
    })
    
  }
  
  deleteProduct($event:any){
    console.log("deleting product")
    console.log($event.target.id)
    this.productService.deleteProduct($event.target.id).subscribe((data:any) =>{
      console.log(data)
      this._router.navigate(["list"])
    } )
    
  }
}
