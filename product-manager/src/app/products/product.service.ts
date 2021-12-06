import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, ProductResponse, ProductsResponse } from './interface/Product.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  URL: string = `http://localhost:8181`
  constructor(private _http: HttpClient) { }

  getProducts(){
    return this._http.get<ProductsResponse>(this.URL)
  }

  getProduct(id:string){
    return this._http.get<ProductResponse>(`${this.URL}/${id}`)
  }

  createProduct(newProduct:Product){
    console.log("SERVICE",newProduct)
    return this._http.post<ProductResponse>(`${this.URL}/new`, newProduct)
  }

  updateProduct(id:string, product:Product){
    return this._http.put<ProductResponse>(`${this.URL}/${id}`, product)

  }

  deleteProduct(id:string){
    return this._http.delete(`${this.URL}/remove/${id}`)
  }
}
