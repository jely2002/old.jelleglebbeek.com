import { Injectable } from '@angular/core';

@Injectable()
export class AnalyticsService {
  constructor() {}
  sendClick(category, action, label) {
    if (label === '') {
      (<any>window).ga('send', 'event', {
        eventCategory: category,
        eventAction: action
      });
    } else {
      (<any>window).ga('send', 'event', {
        eventCategory: category,
        eventAction: action,
        eventLabel: label
      });
    }
  }
}
