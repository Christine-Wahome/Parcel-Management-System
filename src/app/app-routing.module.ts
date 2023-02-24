import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'regparcels', 
    loadComponent:() => import('./reg-parcels/reg-parcels.component').then(m => m.RegParcelsComponent)},
  {path: 'viewparcels', 
    loadComponent:() => import('./parcel-display/parcel-display.component').then(c => c.ParcelDisplayComponent)},
  {path: 'login', 
    loadComponent:() => import('./login/login.component').then(b => b.LoginComponent)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
