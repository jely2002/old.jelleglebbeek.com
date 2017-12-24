import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-walksimulator',
  templateUrl: './walksimulator.component.html',
  styleUrls: ['./walksimulator.component.css']
})
export class WalksimulatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#preloader').delay(100).fadeOut(400);
  }

}
