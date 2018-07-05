import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

login: Login[];

  constructor(private loginService: LoginService) { }

  getLogin(): void {
    this.loginService.getLogin()
    .subscribe(login => this.login = login);
  }
  ngOnInit() {
    this.getLogin();
  }
}
