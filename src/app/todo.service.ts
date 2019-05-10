import { Injectable } from '@angular/core';

export interface Todo {
  id: number;
  name: string;
  done: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[] = [
    { id: 1, name: 'Do laundry', done: false},
    { id: 2, name: 'Do something else', done: false},
    { id: 3, name: 'Do nothing', done: false},
  ];

  constructor() {}

  getTodos() {
    return this.todos;
  }

  getTodo( index: number ) {
    return this.todos[index];
  }

  setTodoItem( index: number, item: Todo ) {
    this.todos[index] = item;
  }
}
