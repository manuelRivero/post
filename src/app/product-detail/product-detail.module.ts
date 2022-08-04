import { ProductDetailComponent } from './product-detail.component';
import { BootstrapModule } from './../bootstrap/bootstrap.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    ProductDetailRoutingModule,
    BootstrapModule,
    SharedModule,
  ]
})
export class ProductDetailModule { }
