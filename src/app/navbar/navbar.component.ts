import { Component, OnInit } from '@angular/core';
import {AnalyticsService} from "../services/analytics.service";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public analytics: AnalyticsService) { }

  ngOnInit() {
  }

}
