export interface Product{
  name:string;
  price:number;
  imageUrl:string;
}

export interface ProductsResponse {
    products: ProductDB[];
}
export interface ProductResponse {
    product: ProductDB;
}

export interface ProductDB {
    _id:          string;
    name:         string;
    price:        number;
    imageUrl:     string;
    createdAt?:   Date;
    updatedAt?:   Date;
    __v?:         number;
}
