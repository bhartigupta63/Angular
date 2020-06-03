import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';    

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class SellerDashboardComponent implements OnInit {

  items: any = [];
  constructor(private http : HttpClient) { }
  public totalproducts: number=0;
  public itemOnSale: number=0;


  ngOnInit() {

    this.total();
  }

totalcount(){
  return this.http.get("http://localhost:3000/product/user");
}

total(){
 
  this.totalcount().subscribe((response)=>{
      this.items=response as object [];
     
      for(let item of this.items){
       if(item.onSale){
        this.itemOnSale=this.itemOnSale+1;
        console.log(this.totalproducts) ;
       }
         
         this.totalproducts=this.totalproducts+1;
      }
      console.log(this.itemOnSale);
      console.log(this.totalproducts);
    })

}

}
