import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos = [
      { name: 'Do laundry', done: false},
      { name: 'Do something else', done: false},
      { name: 'Do nothing', done: false},
  ];

  constructor() { }

  ngOnInit() {
  }

  childWasPressed( event ) {

    console.log(`Hey, I'm a parent`)
    console.log(event);
  }
}
