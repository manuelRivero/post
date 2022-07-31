import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    ButtonComponent,
    ProductCardComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    ProductCardComponent,
    HeaderComponent


  ]
})
export class SharedModule { }
