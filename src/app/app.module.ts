import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { EditTodoItemComponent } from './edit-todo-item/edit-todo-item.component';

const routeConfig = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'todos'
  },
  {
    path: 'todos',
    children: [
      {
        path: '',
        component: TodosComponent
      },
      {
        path: ':index',
        component: EditTodoItemComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    EditTodoItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routeConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
