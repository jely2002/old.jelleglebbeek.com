import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var HtmlElement: any = this;
        var target = HtmlElement.hash;
        console.log(target);
        var $target = $(target);

        $('html, body').stop().animate({
           'scrollTop': $target.offset().top
        }, 1200, 'swing');
    });
  }

}
