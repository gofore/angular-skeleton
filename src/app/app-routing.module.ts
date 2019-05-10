import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { AdminGuard } from './admin.guard';
import { AdminViewComponent } from './admin-view/admin-view.component';

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
    loadChildren: './admin-ui/admin-ui.module#AdminUIModule'
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
