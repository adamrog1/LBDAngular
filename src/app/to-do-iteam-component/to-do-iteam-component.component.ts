import { Component, Input, OnInit } from '@angular/core';
import { ToDo } from '../to-do';
import {TodosService} from '../todos.service'

@Component({
  selector: 'app-to-do-iteam-component',
  styleUrls: ['./to-do-iteam-component.component.scss'],
  template:`
  
  <div class="checkbox">
    <div class="checkbox">
      <input type="checkbox" (change)="checkValue($event)" [checked]="todo.done"/>
      <label for="checkbox"></label>
    </div>
  </div>
  <span>
    {{ todo['name'] }}
  </span>
  
    <div class="delete button">
      <button (click)="deleteTask()">Usun taska</button>)
    </div>
`
})
export class ToDoIteamComponentComponent implements OnInit {

  @Input("todoIn") public todo: ToDo={name: "",done: false}

  constructor(public todoservice:TodosService) { }

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

}
