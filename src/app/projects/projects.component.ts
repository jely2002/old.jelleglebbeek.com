import { Component, OnInit, EventEmitter } from '@angular/core';
import {MaterializeAction} from 'angular2-materialize';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

   actions = new EventEmitter<string|MaterializeAction>();
   isStopped = false;
   timerId = 0;

   stopAutoplay() {
     if(!this.isStopped) {
       clearInterval(this.timerId);
       this.isStopped = true;
     }
   }

  constructor() {
    this.timerId = window.setInterval(() => {
       this.actions.emit({action:"carousel", params:['next']});
    },8000);
  }

  ngOnInit() {}








}
