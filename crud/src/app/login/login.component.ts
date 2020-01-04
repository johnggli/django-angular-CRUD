import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  input;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.input = {
      username: '',
      password: ''
    };
  }

  loginUser() {
    this.userService.loginUser(this.input).subscribe(
      response => {
        console.log(response);
        alert('User ' + this.input.username + ' logged!');
      }
    );
  }

}
