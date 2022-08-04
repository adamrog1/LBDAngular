import { Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { NotificationDynamicComponentComponent } from '../notification-dynamic-component/notification-dynamic-component.component';
import { ToDo } from '../to-do';
import {TodosService} from '../todos.service'

@Component({
  selector: 'app-to-do-iteam-component',
  styleUrls: ['./to-do-iteam-component.component.scss'],
  template:`
<div>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <span class="checkbox">
    <span class="checkbox">
      <input type="checkbox" (change)="checkValue($event); renderDynamicComponent($event)" [checked]="todo.done"/>

      <label for="checkbox"></label>
    </span>
  </span>
  <span>
    {{ todo['name'] }}
  </span>
      <button type="button" class="material-icons" (click)="deleteTask()">delete</button>
</div>
<p><ng-container #container></ng-container></p>
`
})
export class ToDoIteamComponentComponent implements OnInit {

  @Input("todoIn") public todo: ToDo={name: "",done: false}
  @ViewChild("container", {read: ViewContainerRef, static:true})
  private container!: ViewContainerRef; 

  constructor(public todoservice:TodosService, container:ViewContainerRef) {
    this.container=container;
   }

  ngOnInit(): void {
  }

  deleteTask(){
    this.todoservice.deleteTask(this.todo)
  }

  checkValue(event: any){
    let state=event.srcElement.checked;
    this.todo.done=state;
    this.todo.doneCreated=Date.now();
  }

  renderDynamicComponent(event: any): void{
    this.container.clear();
    
    const compRef=this.container.createComponent(
      NotificationDynamicComponentComponent)
    compRef.instance.task=this.todo.name
    console.log(compRef.instance.task);
    
    
    console.log("123");   
  }

}
