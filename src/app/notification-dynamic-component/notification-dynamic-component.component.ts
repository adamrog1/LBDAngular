import { Component, Input, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-notification-dynamic-component',
  
  styleUrls: ['./notification-dynamic-component.component.scss'],
  template: `
  <span>Notification! {{task}} has been checked </span>`
})
export class NotificationDynamicComponentComponent implements OnInit {
  @Input() task!: string

  constructor(viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
  }

}
