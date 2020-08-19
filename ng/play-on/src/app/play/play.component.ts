import { Component, OnInit } from '@angular/core';
import { PlayServiceService } from '../play-service.service'


@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

  myName = "Akhil"

  text="hey, there!"

  ngmText = "ola!"

  


  // constructor() { }

  // ngOnInit(): void {
  // }

  callFunc1(){
    console.log("function called")
  }

  updateValue(e){
    this.text = e.target.value
    // console.log(e)
  }

  // records = [
  //   {
  //     name : "Joseph",
  //     subject : "Economics",
  //     online : true
  //   },
  //   {
  //     name : "Vladimir",
  //     subject : "Mathematics",
  //     online : false
  //   },
  //   {
  //     name : "Annie",
  //     subject : "Computer Science",
  //     online : true
  //   },
  //   {
  //     name : "Eugene",
  //     subject : "Chemistry",
  //     online : true
  //   },
  // ]

  records = {}

  constructor (private firstService : PlayServiceService) {
    
  }

  ngOnInit(){
    this.records = this.firstService.getData()
  }
}
