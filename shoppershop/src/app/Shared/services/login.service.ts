import { HttpClient } from '@angular/common/Http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { tap, pluck } from 'rxjs/operators';

interface IToken {
  access_token: string;
}
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private login_api = "http://localhost:3000/auth/login"
  constructor(private http: HttpClient, private readonly jwtService: JwtHelperService) { }
  getLoginData(User: any) {
    return this.http.post<IToken>(this.login_api, User).pipe(pluck('access_token'), tap(token => {
      localStorage.setItem('access_token', token);
      const decodedToken = this.jwtService.decodeToken();
      localStorage.setItem('access_role', decodedToken['role']);
    }));
  }
}