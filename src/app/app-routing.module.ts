import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { AdminGuard } from './admin.guard';

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
    path: 'admin',
    loadChildren: './admin-ui/admin-ui.module#AdminUIModule',
    canLoad: [AdminGuard]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'todos'
  },
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
