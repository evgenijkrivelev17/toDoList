import { Component, OnInit, Input } from '@angular/core';
import { TasksServiceService } from '../tasks-service.service';
import { Task } from '../task';
import { getLocaleDateTimeFormat } from '@angular/common';

@Component({
  selector: 'app-detail-task',
  templateUrl: './detail-task.component.html',
  styleUrls: ['./detail-task.component.css']
})
export class DetailTaskComponent implements OnInit {

  @Input() currentTask: Task = new Task();

  constructor(private TaskService: TasksServiceService) {
  }

  ngOnInit() {
  }

  public saveTask(): void {
    this.currentTask.TimeDone = new Date();
    this.TaskService.AddTask(this.currentTask);
    this.ClearValue();
  }
  public GoBack() {

  }

  public ClearValue() {
    this.currentTask.ClearData();
  }

}
