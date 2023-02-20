import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'contacto',
    loadChildren: () =>
      import('./contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: 'detalle-receta/:id',
    loadChildren: () =>
      import('./product-detail/product-detail.module').then((m) => m.ProductDetailModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking',
}),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
