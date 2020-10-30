import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BrewserviceService {

  constructor(private http: HttpClient) { }
 
  myCall(){
    return console.log("hey there!");
  }
  myBeer(){
    return this.http.get('https://api.openbrewerydb.org/breweries');
  }
}
