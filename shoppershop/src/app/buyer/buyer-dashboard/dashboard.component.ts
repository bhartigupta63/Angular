import { Component, OnInit } from '@angular/core';
import { CartService } from '../../Shared/services/cart.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class BuyerDashboardComponent implements OnInit {
  items: any=[];
  public total_Item:number=0;
    constructor(private _cartService: CartService) { }
  
    ngOnInit(): void {
      this._cartService.getCartData().subscribe((response)=>{
        this.items=response ;
        console.log(this.items);
        for(let item of this.items){
  
         this.total_Item=this.total_Item+1;
  
        }
  
      })
    }
  
}
