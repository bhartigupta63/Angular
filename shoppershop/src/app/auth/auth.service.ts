import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginComponent } from '../login/login.component';
import { environment } from 'src/environments/environment';
import {JwtHelperService } from '@auth0/angular-jwt';
import { from } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { tap, map } from 'rxjs/operators';



interface IToken{
  access_token : string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  constructor(private readonly http: HttpClient, private readonly jwtService : JwtHelperService) { }


logIn(username: string , password: string){
  return this.http.post<IToken>(`${environment.api_url}auth/login`,{
    username,
    password
  }).pipe(pluck('access_token'), tap(token =>{
    localStorage.setItem('access_token', token);
    const decodedToken = this.jwtService.decodeToken();
    localStorage.setItem('access_role', decodedToken['role']);
  }));
}

logout() { 
  localStorage.removeItem('access_token');
  window.location.reload();
}

}
