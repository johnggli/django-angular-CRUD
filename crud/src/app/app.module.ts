import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { PizzasComponent } from './components/pizzas/pizzas.component';
import { PizzaDetailComponent } from './components/pizza-detail/pizza-detail.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';

import { UserService, AuthInterceptor, AuthGuard } from './services/user.service';
import { ManagersComponent } from './components/managers/managers.component';
import { ManagerDetailComponent } from './components/manager-detail/manager-detail.component';
import { DemandsComponent } from './components/demands/demands.component';


@NgModule({
  declarations: [
    AppComponent,
    PizzasComponent,
    PizzaDetailComponent,
    DashboardComponent,
    LoginComponent,
    ManagersComponent,
    ManagerDetailComponent,
    DemandsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    UserService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
