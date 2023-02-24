import { Injectable } from '@angular/core';
import { Parcel } from '../Interfaces/parceInterface';

@Injectable({
  providedIn: 'root'
})
export class ParcelServiceService {

  constructor() { }

  private parcels:Parcel[]= [
    {
      id:2,
      name:'Aniston',
      email:'anis@travel.com',
      destination:'America'
    }
  ]

  addProduct(parcel:Parcel):void{
    this.parcels.push(parcel)
      }

  getProducts():Parcel[]{
    return this.parcels
  }
}
