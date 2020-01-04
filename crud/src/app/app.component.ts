import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'My Pizzas';

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.isLoggedIn();
  }

  isLoggedIn() {
    return this.userService.isLoggedIn();
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['']);
  }

}