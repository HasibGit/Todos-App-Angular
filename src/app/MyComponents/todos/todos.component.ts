import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  constructor() {
    this.todos = [
      {
        sno: 1,
        title: 'First todo',
        desc: 'First todo tasks',
        active: true
      },
      {
        sno: 2,
        title: 'Second todo',
        desc: 'Second todo tasks',
        active: true
      },
      {
        sno: 3,
        title: 'Third todo',
        desc: 'Third todo tasks',
        active: true
      }
    ];
  }

  ngOnInit(): void {
  }


  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }

}
