import { ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import {NotificationDynamicComponentComponent} from "./notification-dynamic-component.component"

@Injectable({
  providedIn: 'root'
})
export class NotificationDynamicComponentService {

  private componentRef!:ComponentRef<NotificationDynamicComponentComponent>
  constructor() { }

  create(entry: ViewContainerRef, message: string, type?: string){
    this.componentRef = entry.createComponent(NotificationDynamicComponentComponent);
    this.componentRef.instance.message = message;
    this.componentRef.instance.type = type;
    this.componentRef.instance.thisComponentRef = this.componentRef;
    this.componentRef.instance.closeEvent.subscribe((compCloseRef) => this.close(compCloseRef));
  }

  close(compCloseRef: ComponentRef<NotificationDynamicComponentComponent>) {
    compCloseRef.destroy();
  }
}
