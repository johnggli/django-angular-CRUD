import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  pizzas: [];

  constructor(private api: ApiService){
    this.getPizzas();
  }

  // getPizzas() {
  //   this.api.getAllPizzas()
  //   .subscribe(data => this.pizzas = data.results)
  // }

  getPizzas = () => {
    this.api.getAllPizzas().subscribe(
      data => {
        this.pizzas = data.results
      },
      error => {
        console.log(error)
      }
    )
  }
}
