import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from './products/products.component';
import {ProductComponent} from './product/product.component';

const routes: Routes = [
  {path: '', component: ProductsComponent},
  {path: 'product/:name/:index', component: ProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }