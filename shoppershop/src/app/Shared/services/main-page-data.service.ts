import { MainInterface } from './../../main-page/main-interface';
import { HttpClient } from '@angular/common/Http';
import { Observable, from } from 'rxjs';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class MainPageDataService {

  constructor(private _http: HttpClient) { }
  getMainInterface(): Observable<MainInterface[]>{
    return this._http.get<MainInterface[]>('http://localhost:3000/product/all');
  }
}