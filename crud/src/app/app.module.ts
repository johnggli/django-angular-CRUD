import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { PizzasComponent } from './pizzas/pizzas.component';
import { PizzaDetailComponent } from './pizza-detail/pizza-detail.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

import { UserService, AuthInterceptor, AuthGuard } from './user.service';
import { ManagersComponent } from './managers/managers.component';


@NgModule({
  declarations: [
    AppComponent,
    PizzasComponent,
    PizzaDetailComponent,
    DashboardComponent,
    LoginComponent,
    ManagersComponent
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
