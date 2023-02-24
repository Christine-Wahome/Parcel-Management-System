import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Parcel } from '../Interfaces/parceInterface';
import { ActivatedRoute, Params } from '@angular/router';
import { ParcelServiceService } from '../Services/parcel-service.service';



@Component({
  selector: 'app-parcel-display',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './parcel-display.component.html',
  styleUrls: ['./parcel-display.component.css']
})
export class ParcelDisplayComponent implements OnInit{
 parcels:Parcel[]=[]
 
 constructor(private productService:ParcelServiceService, private route:ActivatedRoute){}

 ngOnInit(): void {
  this.route.queryParams.subscribe((params:Params)=>{
    this.parcels=this.productService.getProducts()
  })
  }
 }

