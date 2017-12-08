import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  ngAfterViewInit() {
    $(document).ready(function() { console.log('jquery is working'); });
    $('#preloader').fadeOut("200");
  }
}
