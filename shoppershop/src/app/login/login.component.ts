import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/Http';
import { ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Router} from '@angular/router';
import {LoginService} from './../Shared/services/login.service';
import {JwtHelperService} from '@auth0/angular-jwt';
import {AuthService} from '../Auth/auth.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  error: HttpErrorResponse;
  constructor( private fb :FormBuilder, private login_service:AuthService,private readonly jwtService: JwtHelperService,
    private readonly router: Router) { 
    this.FormDetails()
  }
  FormDetails()
  {
    this.loginForm = this.fb.group({
      username:[''],
      password:['']
      
    })

   
  }

  ngOnInit(){

  }

  logIn()
  {
    if (!this.loginForm.valid) {
      return;
    }
     this.login_service.logIn(this.loginForm.get('username').value,
     this.loginForm.get('password').value).pipe().subscribe(
     
       (token) => {
         const tokenval = this.jwtService.decodeToken(token);
         console.log(tokenval['role']);
         if (tokenval['role'] === 'admin') {
           
          this.router.navigate(["seller"]) 
         } 
         else if (tokenval['role'] === 'user') 
         {
          this.router.navigate(["buyer"]) 
         }
       }, (err) => this.error = err);
      // console.log(this.loginForm.value);
  }

}