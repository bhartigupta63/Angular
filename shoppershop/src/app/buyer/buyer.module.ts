import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyerDashboardComponent } from './buyer-dashboard/dashboard.component';


import { CartComponent } from './cart/cart.component';



import { StartShopComponent } from './start-shop/start-shop.component';

import { ProductDetailComponent } from './product-detail/product-detail.component';

import {BuyerRoutingModule} from './buyer-routing.module';
import { BuyerComponent } from './buyer/buyer.component';

@NgModule({
  declarations: [BuyerDashboardComponent, CartComponent, StartShopComponent, ProductDetailComponent, BuyerComponent],
  imports: [
    CommonModule,
    BuyerRoutingModule
  ]
})
export class BuyerModule { }
