import { Pipe, PipeTransform } from '@angular/core';
import { ToDo } from './to-do';
@Pipe({
  name: 'todoShouldBeDone',
  pure: false
})
export class TodoDonePipe implements PipeTransform {

  transform(todoList: Array<ToDo>, shouldBeDone: boolean): Array<ToDo> {
    // list we return
    let todoListFiltered: Array<ToDo>  = [];

    for (let todo of todoList) {
      if (todo.done == shouldBeDone)
        todoListFiltered.push(todo);
    }

    return todoListFiltered;
  }
}
