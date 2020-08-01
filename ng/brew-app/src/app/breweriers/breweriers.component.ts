import { Component, OnInit } from '@angular/core';
import { BrewserviceService } from '../brewservice.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-breweriers',
  templateUrl: './breweriers.component.html',
  styleUrls: ['./breweriers.component.scss']
})
export class BreweriersComponent implements OnInit {

  brews: Object;

  constructor(private _publicapi: BrewserviceService) { }

  ngOnInit() {
    this._publicapi.myBeer().subscribe(data => {
      this.brews = data;
      console.log(this.brews)
    });
  }

}
