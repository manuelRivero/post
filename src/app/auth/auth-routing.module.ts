import { ActivationCodeComponent } from './activation-code/activation-code.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';


const routes: Routes = [
  {path:"", redirectTo:"login", pathMatch:"full"},
  {path:"login", component: LogInComponent, data: { animation: 'fade' }},
  {path:"register", component: RegisterComponent, data: { animation: 'fade' }},
  {path:"activation-code", component: ActivationCodeComponent, data: { animation: 'fade' }}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
