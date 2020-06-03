import { Component, OnInit } from '@angular/core';
import {ViewProductService} from './../../Shared/services/view-product.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MainInterface} from './../../main-page/main-interface';
import {Observable, from } from 'rxjs' ;



@Component({
  selector: 'app-view-prod',
  templateUrl: './view-prod.component.html',
  styleUrls: ['./view-prod.component.css']
})
export class ViewProdComponent implements OnInit {

  public viewlist:ViewProductService; 
  public viewproductlist:MainInterface[] ;

 public post: any[];
  productid: Array<String> = [];
  component: MainInterface[]; 
  _id:string
  constructor(private productlist : ViewProductService, private http : HttpClient) { 

  }

  ngOnInit() {

    this.viewdetails()
    this.productid

  }

  viewdetails()
  {


    const view= this.productlist.view_products();
    view.subscribe((viewlist:MainInterface[])=>
    {
      this.viewproductlist=viewlist;
      console.log(viewlist);
      
    })

  }
  onDelete(_id )
  {
   console.log(_id);
   this.productid.push(_id);
   console.log(this.productid) ;
   const options = {
    headers: new HttpHeaders({
      'content-Type': 'application/json'
    }),
    body: this.productid
  }

  if (window.confirm('Are you sure, you want to delete?')) {
    console.log(_id)
    this.http.delete('http://localhost:3000/product', options).subscribe(()=>{
    this.viewdetails();
  })
  }

  }
 

}
