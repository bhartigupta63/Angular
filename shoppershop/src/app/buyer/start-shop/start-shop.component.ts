import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router' ;
import {MainInterface} from './../../main-page/main-interface';
import {MainPageDataService} from './../../Shared/services/main-page-data.service';
import { SubjectService } from './../../Shared/services/subject.service';



@Component({
  selector: 'app-start-shop',
  templateUrl: './start-shop.component.html',
  styleUrls: ['./start-shop.component.css']
})
export class StartShopComponent implements OnInit {
  item : MainInterface[] ;

  constructor(private prodService : MainPageDataService, public router : Router, private subjectService:SubjectService) { }

  ngOnInit(): void {
    this.prodService.getMainInterface().subscribe(data => this.item = data) ;
  }

  addTo(i){
    this.subjectService.addToInventory(i);

  }

}
