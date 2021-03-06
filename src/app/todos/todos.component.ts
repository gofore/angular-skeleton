import { Component, OnInit } from '@angular/core';
import {Todo, TodoService} from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];

  constructor(private todoService: TodoService) {
    // todoService.getTodos().subscribe(data => this.todos = data);
    this.todos = todoService.getTodos();
  }

  ngOnInit() {
  }

  childWasPressed( event ) {
    console.log(`Hey, I'm a parent`)
    console.log(event);
  }
}
