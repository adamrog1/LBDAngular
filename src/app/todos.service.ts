import { Injectable } from '@angular/core';
import { AfterViewInit, Component} from '@angular/core';
import { ToDo } from './to-do';

@Injectable({
  providedIn: 'root'
})

export class TodosService{

  todosList: ToDo[]=[];

  constructor() {
  }

  
  addToList(element : ToDo){
    
    return this.todosList.push(element)
  }

  public  getTasks(){
    return this.todosList
  }

  public getAllTasksName(){
    return this.todosList.map((task)=> task.name)
  }

  public deleteTask(todo: ToDo){
    let index=this.getTasks().indexOf(todo)
    if(index!=-1) this.todosList.splice(index,1)

    
  }
}
