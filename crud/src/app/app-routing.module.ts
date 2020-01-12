import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzasComponent } from './components/pizzas/pizzas.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';

import { PizzaDetailComponent } from './components/pizza-detail/pizza-detail.component';
import { LoginComponent } from './components/login/login.component';

import { AuthGuard } from './services/user.service';
import { ManagersComponent } from './components/managers/managers.component';
import { ManagerDetailComponent } from './components/manager-detail/manager-detail.component';
import { DemandsComponent } from './components/demands/demands.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'pizzas', component: PizzasComponent, canActivate: [AuthGuard] },
  { path: 'pizzas/:pk', component: PizzaDetailComponent, canActivate: [AuthGuard] },
  { path: 'managers', component: ManagersComponent, canActivate: [AuthGuard] },
  { path: 'managers/:pk', component: ManagerDetailComponent, canActivate: [AuthGuard] },
  { path: 'demands', component: DemandsComponent, canActivate: [AuthGuard] },
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
