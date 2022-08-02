import { CssSelector } from '@angular/compiler';
import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import {TodosService} from '../app/todos.service'
import { ToDo } from './to-do';

@Component({
  selector: 'app-todo',
  template: ` 

  <form class="tasks-input">
    <mat-form-field class="example-full-width" appearance="fill">
      <mat-label>Nazwa taska</mat-label>
      <input #todoInput matInput>
    </mat-form-field>
  </form>
  <div class="task-button">
    
    <button (click)="addTask()">Dodaj taska!</button>
  </div>
  <a mat-list-item *ngFor="let todo of toDoService.getAllTasksName()" >
  <mat-list>
    <app-to-do-iteam-component>appTooltip [todoIn]="todo" </app-to-do-iteam-component>
  </mat-list>
  </a>
  `
  
})
export class TodoComponent implements OnInit {


  @ViewChild('todoInput') todoInput;

  constructor(public toDoService: TodosService, todoInput: ElementRef) {
    this.todoInput=todoInput;
   }

  addTask(){
    const val=this.todoInput.nativeElement.value.trim()
    if(!val) return
    this.toDoService.addToList({name:val, done: false})
    console.log(this.toDoService.getAllTasksName())
  }


  ngOnInit(): void {
  }

}
