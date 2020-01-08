import { Component, OnInit } from '@angular/core';

import { DemandService } from '../demand.service';

@Component({
  selector: 'app-demands',
  templateUrl: './demands.component.html',
  styleUrls: ['./demands.component.css']
})
export class DemandsComponent implements OnInit {

  demands: any[];

  constructor(private demandService: DemandService) { }

  ngOnInit() {
    this.getDemands();
  }

  getDemands() {
    this.demandService.getDemands()
    .subscribe(data => this.demands = data.results);
  }

}
