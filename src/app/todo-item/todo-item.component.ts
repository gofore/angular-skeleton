import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  data;

  @Output()
  buttonSendingEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  sendButtonToParent() {
    this.data.done = !this.data.done;
    this.buttonSendingEvent.emit(this.data);
  }
}
