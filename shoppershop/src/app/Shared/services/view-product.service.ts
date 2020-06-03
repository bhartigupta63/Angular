import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MainInterface} from './../../main-page/main-interface';

@Injectable({
  providedIn: 'root'
})
export class ViewProductService {

  constructor(private http: HttpClient) { }

  view_products(){
      return this.http.get(`http://localhost:3000/product/user`);
  }
}
