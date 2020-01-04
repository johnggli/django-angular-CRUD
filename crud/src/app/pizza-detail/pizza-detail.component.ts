import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from '../pizza';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PizzaService }  from '../pizza.service';


@Component({
  selector: 'app-pizza-detail',
  templateUrl: './pizza-detail.component.html',
  styleUrls: ['./pizza-detail.component.css'],
})
export class PizzaDetailComponent implements OnInit {

  @Input() pizza: Pizza;

  constructor(
    private route: ActivatedRoute, 
    private pizzaService: PizzaService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getPizza();
  }

  getPizza() {
    const pk = +this.route.snapshot.paramMap.get('pk');
    this.pizzaService.getPizza(pk)
    .subscribe(pizza => this.pizza = pizza);
  }

  goBack() {
    this.location.back();
  }

  save() {
    this.pizzaService.updatePizza(this.pizza)
    .subscribe(() => this.goBack());
  }

}
