import { Component } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  _loginService: LoginService;

  constructor(loginService: LoginService) {
    this._loginService = loginService;
  }
}
