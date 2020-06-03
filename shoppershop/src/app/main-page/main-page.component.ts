import { Component, OnInit } from '@angular/core';
import { MainInterface } from './main-interface';
import { MainPageDataService } from './../Shared/services/main-page-data.service';
import { HeaderComponent } from './../header/header.component'

import { HttpClient } from '@angular/common/Http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  item: MainInterface[];
  constructor(private maindataService: MainPageDataService) { }

  ngOnInit(): void {

    this.maindataService.getMainInterface().subscribe(data => this.item = data);

  }

}







