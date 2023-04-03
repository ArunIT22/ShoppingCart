import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from 'rxjs';

@Injectable()
export class ProductRouteGuardService implements CanActivate, CanActivateChild {

  constructor(private authService: AuthenticationService) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // const isValid = this.authService.isAuthenticated();
    // console.log(`Status :${isValid}`);
    // return isValid;
    return true;
  }


  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return false;
  }

}
