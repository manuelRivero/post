import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { ProductCardComponent } from './product-card/product-card.component';



@NgModule({
  declarations: [
    ButtonComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    ProductCardComponent

  ]
})
export class SharedModule { }
