import { Component, OnInit } from '@angular/core';
import { DemandService } from '../demand.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  demands: any[];
  totalDemands: number = 0;
  totalGain: number = 0;

  constructor(private demandService: DemandService) { }

  ngOnInit() {
    this.getDemands();
  }

  getDemands() {
    this.demandService.getDemands().subscribe(data => {
      this.demands = data.results;
      this.demands.forEach(demand => {
        this.totalDemands++;
        this.totalGain = this.totalGain + demand.pizza.price;
      });
    });
  }

}
