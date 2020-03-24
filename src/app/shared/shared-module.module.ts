import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AlertComponent } from './alert/alert.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { Service } from '../service/service';
import { AuthGuard } from '../service/auth-guard';
import { UrlConfig } from '../service/url-config';
import { GridComponent } from './grid/grid.component';
import { PrimeModule } from './primeng-module';

@NgModule({
  declarations: [AlertComponent, SpinnerComponent, GridComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PrimeModule
  ],
  providers: [Service, AuthGuard, UrlConfig],
  exports: [ FormsModule,
    ReactiveFormsModule,
    AlertComponent,
    SpinnerComponent,
    GridComponent,
    PrimeModule ]
})
export class SharedModuleModule { }
