import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component'
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MaterialModule } from './Shared/material.module';
import { RoleDirective } from './directives/role.directive';
import { MainPageComponent } from './main-page/main-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    RoleDirective,
    MainPageComponent,
    PageNotFoundComponent,
    HeaderComponent
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () =>{
          return localStorage.getItem('access_token');
        },
        whitelistedDomains: ['localhost:4200','localhost:3000','localhost:8080'],
      blacklistedRoutes:[/localhost:4200\/auth\/auth.*/,/localhost:4200\/main\/main.*/]
      }
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
