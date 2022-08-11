import { RegisterComponent } from './register/register.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CodeInputModule } from 'angular-code-input';



import { AuthRoutingModule } from './auth-routing.module';
import { LogInComponent } from './log-in/log-in.component';
import { AuthService } from './auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivationCodeComponent } from './activation-code/activation-code.component';


@NgModule({
  declarations: [
    LogInComponent,
    RegisterComponent,
    ActivationCodeComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CodeInputModule

  ],
  providers:[
    AuthService,
     ]
})
export class AuthModule { }
