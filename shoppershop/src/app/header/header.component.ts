import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  role : 'admin';

  constructor(private readonly jwtService : JwtHelperService) { }

  ngOnInit(): void {
    const claims = this.jwtService.decodeToken();
  }

}
