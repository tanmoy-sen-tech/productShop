import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list.component';
import { ProductsComponent } from './products/products.component';
const routes: Routes = [{ path: '', component: ListComponent },
{ path: 'products', component: ProductsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
