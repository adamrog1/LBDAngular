import { CssSelector } from '@angular/compiler';
import { Component, ElementRef, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import {TodosService} from '../app/todos.service'
import { ToDo } from './to-do';
import { NotificationDynamicComponentService } from './notification-dynamic-component/notification-dynamic-component.service';

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

  <div class="dialog-container">
  <div #dialog></div>
</div>
 
  `
  
})
export class TodoComponent implements OnInit {


  @ViewChild('todoInput') todoInput;
  @ViewChild('dialog', {read:ViewContainerRef}) dialogEntry!:ViewContainerRef

  constructor(public toDoService: TodosService, todoInput: ElementRef, private dialogService: NotificationDynamicComponentService ) {
    this.todoInput=todoInput;
   }

  addTask(){
    const val=this.todoInput.nativeElement.value.trim()
    if(!val){
      this.createDialog("Nazwa nie może być pusta","e");
      return;
    } 
    if(val.length<5){
      this.createDialog("Nazwa nie moze byc mniejsza niz 5 znakow", "error");
      return;
    }
    this.toDoService.addToList({name:val, done: false})
    //clear and focus
    this.todoInput.nativeElement.value="";
    this.todoInput.nativeElement.focus();
    //show notification
    this.createDialog("Dodano nowe zadanie !", "success")
    console.log(this.createDialog("Dodano nowe zadanie","success"));
    
  }

  createDialog(message: string, type?: string) {
    this.dialogService.create(this.dialogEntry, message, type);
  }


  ngOnInit(): void {
  }

}
