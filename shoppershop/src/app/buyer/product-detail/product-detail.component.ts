import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { SubjectService } from './../../Shared/services/subject.service';

import { CartService } from './../../Shared/services/cart.service';
import { HttpHeaders, HttpClient } from '@angular/common/Http';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  item;
  quantity;
  product_quantity:number;
  id;
  product_detail;
  
  selectChangeHandler (event:any){
    this.quantity=(event.target.value);
    this.product_quantity=parseInt(this.quantity)
    console.log(this.product_quantity);
    console.log(typeof(this.product_quantity))
  }
    constructor(private _cartService:CartService,private router:Router,private _http:HttpClient,private _subjectService:SubjectService) { }
  
    ngOnInit(): void {
      this._subjectService.inventoryChange$.subscribe(res=>{
        this.item=res;
  
      })
      this.id=this.item._id;
      console.log(this.item._id);
  
    }
    addToCart()
    {
     this.product_detail={
        'quantity':this.product_quantity,
              'product':this.item._id
            }
  
      this._cartService.postCartData(this.product_detail)
      .subscribe((response=>{
        console.log(response)
        if (window.confirm('Added To Cart')){
          this.router.navigate(['../start-shop'])
       }
      }))
      }
}
