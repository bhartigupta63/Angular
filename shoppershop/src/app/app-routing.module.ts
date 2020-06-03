import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SellerModule } from './seller/seller.module';
import { BuyerModule } from './buyer/buyer.module';
import { AuthoriseService } from './guards/authorise.service';
import { UserAuthService } from './guards/user-auth.service';
import { BuyerDashboardComponent } from './buyer/buyer-dashboard/dashboard.component';
import { AddProdComponent } from './seller/add-prod/add-prod.component';

import { ViewProdComponent } from './seller/view-prod/view-prod.component';
import { CartComponent } from './buyer/cart/cart.component';

import { SellerDashboardComponent } from './seller/seller-dashboard/dashboard.component';
import { StartShopComponent } from './buyer/start-shop/start-shop.component';
import { EditProdComponent } from './seller/edit-prod/edit-prod.component';
import { ProductDetailComponent } from './buyer/product-detail/product-detail.component';




const routes: Routes = [

  { path: '', redirectTo: '/main-page', pathMatch: 'full' },
  { path: 'main-page', component: MainPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  {
    path: 'seller',
    loadChildren: () => import('./seller/seller.module').then(m => m.SellerModule)
  },
  {
    path: 'buyer',
    loadChildren: () => import('./buyer/buyer.module').then(m => m.BuyerModule)
  },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const rountingComponents = [LoginComponent, SignupComponent]