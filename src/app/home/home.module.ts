import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { BootstrapModule } from '../bootstrap/bootstrap.module';

import { FormsModule } from '@angular/forms';
import { ContentGeneratorComponent } from './content-generator/content-generator.component';
import { MediaModalComponent } from './media-modal/media-modal.component';


@NgModule({
  declarations: [
    HomeComponent,
    ContentGeneratorComponent,
    MediaModalComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    BootstrapModule,
    FormsModule,
    HttpClientModule

  ]
})
export class HomeModule { }
