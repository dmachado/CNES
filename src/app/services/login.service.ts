import { Injectable } from '@angular/core';

import { User } from '../models/User';

@Injectable({
  // declares that this service should be created
  // by the root application injector.
  providedIn: 'root'
})
export class LoginService {
  currentUser: User;

  constructor() {}

  isLoggedIn = function() {
    if (this.currentUser) {
      return true;
    } else {
      return false;
    }
  };

  logout = function() {
    this.currentUser = null;
  };

  login = function() {
    var _user = new User('Daniel', 'JK Consultoria', '000000000000');

    this.currentUser = _user;
  };
}
