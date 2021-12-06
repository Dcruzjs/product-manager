import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductService } from './product.service';
import { ProductRoutingModule } from './product-routing.module';
import { RouterModule } from '@angular/router';
import { ProductFormComponent } from './product-form/product-form.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ProductFormComponent,
    EditProductComponent,
    ProductListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ProductRoutingModule
  ],
  exports:[
    MainPageComponent
  ],
  providers: [ProductService],
  
})
export class ProductsModule { }
