import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  _loginService: LoginService;

  constructor(loginService: LoginService) {
    this._loginService = loginService;
  }

  login() {
    this._loginService.login();
  }

  logout() {
    this._loginService.logout();
  }

  ngOnInit() {}
}
