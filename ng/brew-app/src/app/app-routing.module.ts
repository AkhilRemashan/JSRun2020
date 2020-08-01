import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 
import { HomeComponent } from './home/home.component'
import { BreweriersComponent } from './breweriers/breweriers.component'

// 

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'breweries', component: BreweriersComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
