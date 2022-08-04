import { Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { NotificationDynamicComponentService } from '../notification-dynamic-component/notification-dynamic-component.service';
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
      <input type="checkbox" (change)="checkValue($event)" [checked]="todo.done"/>

      <label for="checkbox"></label>
    </span>
  </span>
  <span>
    {{ todo['name'] }}
  </span>
      <button type="button" class="material-icons" (click)="deleteTask()">delete</button>
</div>
`
})
export class ToDoIteamComponentComponent implements OnInit {

  @Input("todoIn") public todo: ToDo={name: "",done: false}
  @Output("createDialog") createNotificationEvent=new EventEmitter


  constructor(public todoservice:TodosService) {
   }

  ngOnInit(): void {
  }

  deleteTask(){
    this.todoservice.deleteTask(this.todo)
    console.log(this.createNotificationEvent.emit({message:"Usunięto taska",type: 'warning'}))
  }

  checkValue(event: any){
    let state=event.srcElement.checked;
    this.todo.done=state;
    this.todo.doneCreated=Date.now();
    let msg = state ? "Zaznaczono '"+this.todo.name+"' jako zrobione" : "Zaznaczono '"+this.todo.name+"' jako do zrobienia";
    this.createNotificationEvent.emit({message: msg, type: 'info'});
    
  }
}
