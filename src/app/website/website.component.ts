import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.css']
})
export class WebsiteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#preloader').delay(100).fadeOut(400);
  }

}
