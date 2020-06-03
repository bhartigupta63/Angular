import { HttpClient } from '@angular/common/Http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private signup_api = "http://localhost:3000/user"
  constructor(private http: HttpClient) { }
  getSignupData(User: any) {
    return this.http.post(this.signup_api, User)
  }
}