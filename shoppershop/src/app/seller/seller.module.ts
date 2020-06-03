import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerDashboardComponent } from './seller-dashboard/dashboard.component';
import { AddProdComponent } from './add-prod/add-prod.component';

import { ViewProdComponent } from './view-prod/view-prod.component';
import {FormsModule} from '@angular/forms'
import {ReactiveFormsModule} from '@angular/forms';
import { EditProdComponent } from './edit-prod/edit-prod.component';

import {SellerRoutingModule} from './seller-routing.module';
import { SellerComponent } from './seller/seller.component';
@NgModule({
  declarations: [SellerDashboardComponent, AddProdComponent,  ViewProdComponent, EditProdComponent, SellerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
    SellerRoutingModule
  ]
})
export class SellerModule { }
