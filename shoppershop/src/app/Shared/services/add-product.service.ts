import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MainInterface} from './../../main-page/main-interface';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {

  constructor(private http: HttpClient) { }

    
  get_product(product ) {
      console.log(product);
      return this.http.post(`http://localhost:3000/product`, product);
  }
  Category()
  {
    return this.http.get('http://localhost:3000/product-category')
  }
}
