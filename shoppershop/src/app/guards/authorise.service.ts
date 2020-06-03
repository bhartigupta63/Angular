import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {JwtHelperService } from '@auth0/angular-jwt';
import{ CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthoriseService implements CanActivate {

  constructor( private readonly jwtService : JwtHelperService) { }
    canActivate() : boolean | Promise<boolean> | Observable <boolean>{
      console.log(this.jwtService);
      return !this.jwtService.isTokenExpired();
    
   }
}
