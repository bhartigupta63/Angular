import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EditProductService {

  constructor(private http:HttpClient) { }
  EditProduct(id)
  { 
    console.log(id);
    return this.http.get('http://localhost:3000/product/user'+'/'+id)
  }
  UpdateDetails(detail,id)
  {
    console.log(detail);
    return this.http.put('http://localhost:3000/product'+'/'+id,detail);
  }
}
