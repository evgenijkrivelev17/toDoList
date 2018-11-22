import { NgModule } from '@angular/core';
import { Routes, RouterModule, RoutesRecognized } from '@angular/router';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { DetailTaskComponent } from './detail-task/detail-task.component';
import { ChangeTaskComponent } from './change-task/change-task.component';

const routes: Routes = [
  { path: '', component: TasksListComponent },
  { path: 'edit', component: DetailTaskComponent },
  { path: 'change/:id', component: ChangeTaskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
