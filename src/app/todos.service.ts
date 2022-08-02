import { Injectable } from '@angular/core';
import { AfterViewInit, Component} from '@angular/core';
import { ToDo } from './to-do';

@Injectable({
  providedIn: 'root'
})

export class TodosService{

  todos: ToDo[]=[];

  constructor() {
  }

  
  addToList(element : ToDo){
    
    return this.todos.push(element)
  }

  public  getTasks(){
    return this.todos
  }

  public getTaskName(){
    return this.todos.map((task)=> task.name)
  }
}
