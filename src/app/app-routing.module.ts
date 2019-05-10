import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';

const appRoutes = [
  {
    path: 'todos',
    component: TodosComponent,
  },
  {
    path: 'todos/:index',
    component: EditTodoComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'todos'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
        appRoutes,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
