import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
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
