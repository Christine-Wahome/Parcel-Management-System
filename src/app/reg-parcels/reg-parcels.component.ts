import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormGroup,FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Parcel } from '../Interfaces/parceInterface';
import { ParcelServiceService } from '../Services/parcel-service.service';

@Component({
  selector: 'app-reg-parcels',
  standalone: true,
  imports: [CommonModule,RouterModule,ReactiveFormsModule ],
  templateUrl: './reg-parcels.component.html',
  styleUrls: ['./reg-parcels.component.css']
})
export class RegParcelsComponent implements OnInit{
  registerForm!:FormGroup
  title = 'angularvalidate';
  submitted=false;

  constructor(private formBuilder:FormBuilder,private productService:ParcelServiceService){}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      
      cusName:['',[Validators.required,Validators.minLength(4)]],
      email:['',[Validators.required,Validators.email]],
      destination:['',Validators.required],
      
    })
  }

  onSubmit(){
    this.submitted = true
   console.log(this.registerForm);
   
 }
 
 addParcel(){
  let parcel :Parcel= {...this.registerForm.value, id:Math.floor(Math.random() *10000)};
    this.productService.addProduct(parcel)
    console.log(parcel);
    
 }
}
