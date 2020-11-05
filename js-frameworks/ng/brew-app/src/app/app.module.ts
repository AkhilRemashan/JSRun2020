import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BreweriersComponent } from './breweriers/breweriers.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';  // Add this



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BreweriersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
