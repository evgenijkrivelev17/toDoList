import { Component, OnInit, Input } from '@angular/core';
import { TasksServiceService } from '../tasks-service.service';
import { Task } from '../task';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-change-task',
  templateUrl: './change-task.component.html',
  styleUrls: ['./change-task.component.css']
})
export class ChangeTaskComponent implements OnInit {

  @Input() task: Task;
  constructor(private TaskService: TasksServiceService, private route: ActivatedRoute, private router: Router) {
    this.task = new Task();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.task.Id = params.id;
    });
    this.task = this.TaskService.getTask(this.task.Id);
    console.log(this.task);
  }


  private changeTask(): void {
    let result = this.TaskService.UpdateTask(this.task);
    this.router.navigate(['']);
  }

}
