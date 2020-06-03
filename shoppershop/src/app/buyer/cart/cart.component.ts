import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/Http';
import { CartService } from '../../Shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;
price:number;
item_price:number[]=[];
total_price:number=0;

  constructor(private _cartService:CartService,private _http:HttpClient,private router:Router) { }

  ngOnInit(): void {

   this.display_details();
  }
  display_details(){
    this.total_price=0;
    this.items=[];
    this._cartService.getCartData().subscribe(res=>{
      if(res.length){
      this.items=res;
      console.log(res)
// this.total_price=0;
      for(let item of this.items){
        if(item.product.onSale===true)
        {
           this.price=item.quantity*item.product.salePrice;
        }
       else{
         this.price=item.quantity*item.product.mrp;
        }
        this.item_price.push(this.price)
      }


       for(let i of this.item_price)
       {
         this.total_price=this.total_price+i
       }
      }
    })

  }


  delete()
  {
    this._http.delete('http://localhost:3000/user-cart').subscribe(res=>{
      console.log(res)
      this.display_details();
    })
  }
}
