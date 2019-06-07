import { Component, OnInit } from '@angular/core';
import {AnalyticsService} from "../services/analytics.service";

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  constructor(public analytics: AnalyticsService) { }

  public ageFromDateOfBirthday(dateOfBirth: any): number {
    const today = new Date();
    const birthDate = new Date(dateOfBirt);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age --;
    }
    return age;
  }
  
  age = ageFromDateOfBirthday("06/09/2002");
     
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
