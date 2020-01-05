import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  input;
  showErrorMessage;

  constructor(
      private userService: UserService,
      private router: Router
    ) { }

  ngOnInit() {
    this.input = {
      username: '',
      password: ''
    };
  }

  loginUser() {
    this.showErrorMessage = false;
    this.userService.loginUser(this.input).subscribe(
      response => this.router.navigate(['dashboard']),
      error => this.showErrorMessage = true
    );
  }

  isLoggedIn() {
    return this.userService.isLoggedIn();
  }

  moveToDashboard() {
    this.router.navigate(['dashboard']);
  }

}
