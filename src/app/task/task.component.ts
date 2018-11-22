import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Output() onRemoved = new EventEmitter<Task>();

  @Input() Task: Task;
  constructor() { }

  ngOnInit() {
  }

  public onRemove(task: Task) {
    this.onRemoved.emit(task);
  }

  public getStatus(): String {
    return this.Task.IsDone ? `Статус: Выполнено` : `Статус: В процессе`;
  }
}
