import { CssSelector } from '@angular/compiler';
import { Component, OnInit, Output, ViewChild } from '@angular/core';
import {TodosService} from '../app/todos.service'
import { ToDo } from './to-do';

@Component({
  selector: 'app-todo',
  styleUrls: ['./todo.component.scss'],
  template: ` 

  <form class="tasks-input">
    <mat-form-field class="example-full-width" appearance="fill">
      <mat-label>Nazwa taska</mat-label>
      <input #newTask matInput>
    </mat-form-field>
  </form>
  <div class="task-button">
    
    <button (click)="addTask(newTask.value, false)">Dodaj taska!</button>
  </div>
  <mat-list>
    <a mat-list-item *ngFor="let task of toDoService.getTaskName(); let i=index"> 
    <div class="container">
    <div class="round">
      <input type="checkbox" checked id="{{ 'checkbox'+i }}"/>
      <label for="checkbox"></label>
    </div>
  </div>
  
    {{ task }} </a>
  </mat-list>
  `
  
})
export class TodoComponent implements OnInit {


  constructor(public toDoService: TodosService) {
   }

  addTask(name: string, done: boolean){
    const newTask: ToDo={
      name: name,
      done: done
    }
    this.toDoService.addToList(newTask)
  }


  ngOnInit(): void {
  }

}
