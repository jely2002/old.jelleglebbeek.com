import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-pc',
  templateUrl: './pc.component.html',
  styleUrls: ['./pc.component.css']
})
export class PcComponent implements OnInit {

  constructor() { }

  hide: false;


  ngOnInit() {
    if (window.innerWidth <= 992) {
    this.hide = true;
  } else {
    this.hide = false;
  }

    $(window).resize(function() {
    if (window.innerWidth <= 992) {
      this.hide = true;
    } else {
      this.hide = false;
    }
    });
  }

}
