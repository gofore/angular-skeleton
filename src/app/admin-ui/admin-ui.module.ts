import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminViewComponent } from '../admin-view/admin-view.component';
import { RouterModule } from '@angular/router';


const routes = [
  {
    path: '',
    component: AdminViewComponent
  }
];

@NgModule({
  declarations: [AdminViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminUIModule { }
