

import { Injectable } from '@angular/core';
import { Subscription, BehaviorSubject } from 'rxjs';
import { MainInterface } from 'src/app/main-page/main-interface';


@Injectable({
  providedIn: 'root'
})
export class SubjectService {
latestArticle:MainInterface={
  name:"",
  mrp:0,
  salePrice:0,
  onSale:false,
  description:"",
  _id:""
};
  private inventorySubject$=new BehaviorSubject<MainInterface>(this.latestArticle);
  inventoryChange$=this.inventorySubject$.asObservable();
  addToInventory(maininterface:MainInterface){
    this.latestArticle=maininterface;
    this.inventorySubject$.next(maininterface);
  }
}