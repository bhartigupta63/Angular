import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/Http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _http:HttpClient) { }
  getCartData():Observable<any>{
    return this._http.get('http://localhost:3000/user-cart')

  }
postCartData(User){
  return this._http.post('http://localhost:3000/user-cart',User)
}
}