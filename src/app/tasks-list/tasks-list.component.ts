import { Component, OnInit, Input } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { DetailTaskComponent } from '../detail-task/detail-task.component';
import { TasksServiceService } from '../tasks-service.service';
import { Task } from '../task';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  Tasks: Task[];
  currentTask: Task;
  constructor(private TasksService: TasksServiceService, private router: Router) {

  }

  async ngOnInit() {
    await this.TasksService.getTasks();
    this.Tasks = this.TasksService.Tasks;
  }

  private async onRemove(task: Task) {
    let result = this.TasksService.DeleteTask(task);
  }

  private selected(task: Task) {
    this.currentTask = task;
    this.router.navigate([`change/${task.Id}`]);
  }

}
