import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { SubserverComponent } from './subserver/subserver.component';



@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    SubserverComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
