import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormArray, FormControl } from '@angular/forms';
import {AddProductService} from "./../../Shared/services/add-product.service";
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import {Router} from '@angular/router';

interface ICategory
{
  _id:string,
  name:string,
  user:string,
  _v:number
}

@Component({
  selector: 'app-add-prod',
  templateUrl: './add-prod.component.html',
  styleUrls: ['./add-prod.component.css']
})
export class AddProdComponent implements OnInit {

  public catList: AddProductService[];
 
  addProductForm:FormGroup     
  public categoryList:ICategory[];
  
  constructor(private fb:FormBuilder, private add_Product : AddProductService ,private router:Router){
    this.AddItemDetails();
  }
  
  AddItemDetails()
   {
    this.addProductForm= this.fb.group({
    name:['', Validators.required],
    description:['',[ Validators.required]],
    mrp:[null,[Validators.required,Validators.min(10)]],
    salePrice:[null,[Validators.required,Validators.min(10)]],
    quantity:[null,[Validators.required,Validators.min(1)]],
    onSale:[false,Validators.required],
    category:['',Validators.required]


  })
}       
 

  get_Product()
   {
    if (!this.addProductForm.valid) {
     window.alert("Product not added");
    }
    else {
      window.alert("Product added successfully!");
    }
    this.add_Product.get_product(this.addProductForm.value) .subscribe(
      res => console.log(res),
      err => console.log(err),
    
    )
    
      console.log(this.addProductForm.value);
      this.router.navigate(["../seller-dashboard"]);
   }
  ngOnInit() {
    const cat =this.add_Product.Category();
    cat.subscribe((catList:ICategory[])=>
    {
        this.categoryList= catList;
        console.log(catList);
    })
  }
     

}


