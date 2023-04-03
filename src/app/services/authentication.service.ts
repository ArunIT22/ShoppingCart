import { Injectable } from "@angular/core";

@Injectable()
export class AuthenticationService {
  isValidUser: boolean = false;

  login() {
    this.isValidUser = true;
  }

  logout() {
    this.isValidUser = false;
  }

  isAuthenticated() {
    return this.isValidUser;
  }

}
