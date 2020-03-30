import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModuleModule } from './../../shared/shared-module.module';
import { RouterModule } from '@angular/router';
import { HistoryComponent } from './history/history.component';



@NgModule({
  declarations: [ListComponent, ProductsComponent, HistoryComponent],
  imports: [
    CommonModule,
    ListRoutingModule,
    SharedModuleModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ListModule { }
