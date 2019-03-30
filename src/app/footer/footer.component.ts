import { Component, OnInit } from '@angular/core';
import {AnalyticsService} from "../services/analytics.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public analytics: AnalyticsService) { }

  ngOnInit() {
    
  }

}
