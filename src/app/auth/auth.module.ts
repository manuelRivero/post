import { RegisterComponent } from './register/register.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LogInComponent } from './log-in/log-in.component';
import { AuthService } from './auth.service';


@NgModule({
  declarations: [
    LogInComponent,
    RegisterComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    AuthRoutingModule,

  ],
  providers:[
    AuthService
  ]
})
export class AuthModule { }
