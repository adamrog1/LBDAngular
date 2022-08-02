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

  <mat-label>Lista zadań gotowych</mat-label>
  <mat-list role="list">

    <mat-list-item role="listiteam" *ngFor="let todo of toDoService.getTasks() | todoShouldBeDone:true">
      <app-to-do-iteam-component appTooltip [tooltipDateDone]="todo.doneCreated" [todoIn]="todo"></app-to-do-iteam-component>
    </mat-list-item>


  <mat-label>Lista zadań nie gotowych</mat-label>
  <mat-list role="list">

    <mat-list-item role="listiteam" *ngFor="let todo of toDoService.getTasks() | todoShouldBeDone:false">
      <app-to-do-iteam-component appTooltip [tooltipDateDone]="todo.doneCreated" [todoIn]="todo"></app-to-do-iteam-component>
    </mat-list-item>

  </mat-list>
 
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
    //clear and focus
    this.todoInput.nativeElement.value="";
    this.todoInput.nativeElement.focus();
  }


  ngOnInit(): void {
  }

}
