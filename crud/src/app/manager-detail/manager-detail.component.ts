import { Component, OnInit, Input } from '@angular/core';
import { Manager } from '../manager';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ManagerService }  from '../manager.service';

@Component({
  selector: 'app-manager-detail',
  templateUrl: './manager-detail.component.html',
  styleUrls: ['./manager-detail.component.css']
})
export class ManagerDetailComponent implements OnInit {

  @Input() manager: Manager;

  constructor(
    private route: ActivatedRoute, 
    private managerService: ManagerService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getManager();
  }

  getManager() {
    const pk = +this.route.snapshot.paramMap.get('pk');
    this.managerService.getManager(pk)
    .subscribe(manager => this.manager = manager);
  }

  goBack() {
    this.location.back();
  }

  save() {
    this.managerService.updateManager(this.manager)
    .subscribe(() => this.goBack());
  }

}
