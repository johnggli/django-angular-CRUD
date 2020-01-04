import { Component, OnInit } from '@angular/core';
import { Pizza } from '../pizza';

import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css'],
})
export class PizzasComponent implements OnInit {

  pizzas: Pizza[];

  constructor(private pizzaService: PizzaService) { }

  ngOnInit() {
    this.getPizzas();
  }

  getPizzas() {
    this.pizzaService.getPizzas()
    .subscribe(data => this.pizzas = data.results);
  }

  add(name: string, description: string, price: number) {
    name = name.trim();
    if (!name) { return; }

    description = description.trim();
    if (!description) { return; }

    if (!price) { return; }

    this.pizzaService.addPizza({ name, description, price  } as Pizza)
      .subscribe(data => {
        this.pizzas.push(data);
      });
  }

  delete(pizza: Pizza) {
    this.pizzas = this.pizzas.filter(p => p !== pizza);
    this.pizzaService.deletePizza(pizza).subscribe();
  }

}
