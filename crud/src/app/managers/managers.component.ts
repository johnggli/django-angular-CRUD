import { Component, OnInit } from '@angular/core';
import { Manager } from '../manager';

import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.css']
})
export class ManagersComponent implements OnInit {

  managers: Manager[];

  constructor(private managerService: ManagerService) { }

  ngOnInit() {
    this.getManagers();
  }

  getManagers() {
    this.managerService.getManagers()
    .subscribe(data => this.managers = data.results);
  }

  add(name: string, email: string, cpf: string, salary: number) {
    name = name.trim();
    if (!name) { return; }

    email = email.trim();
    if (!email) { return; }

    cpf = cpf.trim();
    if (!cpf) { return; }

    if (!salary) { return; }

    this.managerService.addManager({ name, email, cpf , salary  } as Manager)
      .subscribe(data => {
        this.managers.push(data);
      });
  }

  delete(manager: Manager) {
    this.managers = this.managers.filter(p => p !== manager);
    this.managerService.deleteManager(manager).subscribe();
  }

}
