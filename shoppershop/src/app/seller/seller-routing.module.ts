import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellerDashboardComponent } from './seller-dashboard/dashboard.component';
import { AddProdComponent } from './add-prod/add-prod.component';
import { ViewProdComponent } from './view-prod/view-prod.component';
import { EditProdComponent } from './edit-prod/edit-prod.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { AuthoriseService } from '../guards/authorise.service';
import { UserAuthService } from '../guards/user-auth.service';
import { SellerComponent } from './seller/seller.component';

const routes: Routes = [
    {
        path: "",
        component: SellerComponent,
        canActivate: [AuthoriseService],
        children: [

            { path: '', redirectTo: 'seller-dashboard', pathMatch: 'full' },
            { path: 'seller-dashboard', component: SellerDashboardComponent},
            { path: 'add-prod', component: AddProdComponent },
            { path: 'view-prod', component: ViewProdComponent },
            { path: 'edit-prod/:id', component: EditProdComponent },
            { path: '**', component: PageNotFoundComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SellerRoutingModule { }

