import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo, TodoService } from '../todo.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: [ './edit-todo.component.css' ]
})
export class EditTodoComponent implements OnInit {

  id: number;

  data: Todo;

  constructor( private route: ActivatedRoute, private todoService: TodoService ) {
    route.params.subscribe(params => {
      console.log(params);
      this.id = +params.id;
    });

  }

  ngOnInit() {
  }

}
