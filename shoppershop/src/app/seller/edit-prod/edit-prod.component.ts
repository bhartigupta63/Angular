import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlName, NgForm } from '@angular/forms';
import { FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import {Router} from '@angular/router';
import {EditProductService} from '../../Shared/services/edit-product.service';

@Component({
  selector: 'app-edit-prod',
  templateUrl: './edit-prod.component.html',
  styleUrls: ['./edit-prod.component.css']
})
export class EditProdComponent implements OnInit {

  EditProductForm:FormGroup
  item;
  private path;
  constructor( private fb : FormBuilder,private Edit_Product:EditProductService, private route:ActivatedRoute,
     private router:Router) {
    
    let id =this.route.snapshot.paramMap.get('id')
     
    if(id)
    {
      this.Edit_Product.EditProduct(id).pipe(take(1)).subscribe
      (res => {this.EditProductForm.patchValue(res);
      this.item=res})
      
    }
    this.EditProductForm =this.fb.group({
      salePrice:[null,[Validators.required,Validators.min(10)]],
      quantity:[null,[Validators.required,Validators.min(1)]],
      onSale:[false,Validators.required]
    });
    
   }
   
   AddProduct(id)
   {   
    
      this.Edit_Product.UpdateDetails(this.EditProductForm.value,id).subscribe(
         res => console.log(res),
         err => console.log(err),
         
         
         )
         window.alert("item updated");
         this.router.navigate(["../view-prod"]);
        

   }
  

  ngOnInit(): void {
  }


}
