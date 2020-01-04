import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzasComponent } from './pizzas/pizzas.component';

import { DashboardComponent } from './dashboard/dashboard.component';

import { PizzaDetailComponent } from './pizza-detail/pizza-detail.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './user.service';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'pizzas', component: PizzasComponent, canActivate: [AuthGuard] },
  { path: 'pizzas/:pk', component: PizzaDetailComponent, canActivate: [AuthGuard] },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
