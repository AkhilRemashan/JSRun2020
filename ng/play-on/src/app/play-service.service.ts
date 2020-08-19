import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayServiceService {

  constructor(private http : HttpClient) { }

  getData(){
    return [
      {
        name : "Joseph",
        subject : "Economics",
        online : true
      },
      {
        name : "Vladimir",
        subject : "Mathematics",
        online : false
      },
      {
        name : "Annie",
        subject : "Computer Science",
        online : true
      },
      {
        name : "Eugene",
        subject : "Chemistry",
        online : true
      },
    ]
  }
}
