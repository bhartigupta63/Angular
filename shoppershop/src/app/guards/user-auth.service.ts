import { Injectable } from '@angular/core';
import {CanActivate, 
  ActivatedRoute, 
  ActivatedRouteSnapshot, 
  RouterStateSnapshot} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class UserAuthService implements CanActivate {

  constructor(private jwtService: JwtHelperService) {  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    console.log(route,state);
    const claims = this.jwtService.decodeToken();
    return claims['role'] === 'user';
  }
}
