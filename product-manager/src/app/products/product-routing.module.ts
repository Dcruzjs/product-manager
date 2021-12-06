import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from "./product-list/product-list.component";
import { EditProductComponent } from "./edit-product/edit-product.component";
import { ProductFormComponent } from './product-form/product-form.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:"list",
    component: ProductListComponent,
    children:[
      {
        path:"edit/:id",
        component: EditProductComponent
      },
    ]
  },
  {
    path:"home",
    component: HomeComponent
  },
  {
    path:"new",
    component: ProductFormComponent
  },
  {
    path:"**",
    redirectTo: "list"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
