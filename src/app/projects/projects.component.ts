import { Component, OnInit, EventEmitter } from '@angular/core';
import {MaterializeAction} from 'angular2-materialize';
import {Observable} from 'rxjs/Rx';
import {AnalyticsService} from "../services/analytics.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  actions = new EventEmitter<string|MaterializeAction>();

  noopen(index) {
      this.actions.emit({action:"collapsible", params:['open', index]});
      this.actions.emit({action:"collapsible", params:['close', index]});
  }

  constructor(public analytics: AnalyticsService) {
  }

  ngOnInit() {}








}
