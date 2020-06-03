import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/Http';
import { Router} from '@angular/router';
import { SignupService } from './../Shared/services/signup.service';

import { ReactiveFormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  
  signupForm= this.fb.group({
    displayName:['', Validators.required],
    userName:['', Validators.required],
    password:['',[Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,15}$/),
    Validators.required ]],
    role:['',Validators.required]

  });
  constructor(private fb:FormBuilder,private router:Router, private http: HttpClient, private signupservice: SignupService) { }

  ngOnInit(): void {
  }
  signup() {
    this.signupservice.getSignupData(this.signupForm.value)
  .subscribe(
    res => {
      console.log(res)
    },
    (err:any) => {
      return console.log(err);
    }
  )
  alert("Sign Up Completed!!")
 this.router.navigate(['/login']);
}
}

