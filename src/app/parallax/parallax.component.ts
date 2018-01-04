import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.css']
})
export class ParallaxComponent implements OnInit {

  constructor() { }

  hide = false;


  ngOnInit() {
    if (window.innerWidth <= 992) {
    this.hide = true;
  } else {
    this.hide = false;
  }

    $(window).resize(function() {
    var HTMLElement: any = this;
    if (window.innerWidth <= 992) {
      var hide = true;
    } else {
      var hide = false;
    }
    });
  }

}
