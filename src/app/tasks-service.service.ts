import { Injectable, OnInit } from '@angular/core';
import { Task } from './task';
import { Observable } from 'rxjs';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class TasksServiceService {
  constructor() {
    this.Tasks = [new Task('1', 'Встать с кровати', 'Какое-то описание', new Date(), false),
    new Task('2', 'Почистить зубы', 'Какое-то описание', new Date(), false),
    new Task('3', 'Умыться', 'Какое-то описание', new Date(), false),
    new Task('4', 'Приготовить кофе', 'Какое-то описание', new Date(), false),
    new Task('5', 'Приготовить завтрак', 'Какое-то описание', new Date(), false),
    new Task('6', 'Одеться', 'Какое-то описание', new Date(), false),
    new Task('7', 'Послушать музыку', 'Какое-то описание', new Date(), false),
    new Task('8', 'Поработать', 'Какое-то описание', new Date(), false)
    ];
  }

  private Tasks: Task[];


  public getTasks(): Task[] {
    return this.Tasks;
  }

  public AddTask(newTask: Task): void {
    this.Tasks.push(newTask);
  }

  public UpdateTask(updateTask: Task): Boolean {
    const index = this.Tasks.findIndex((v, i, array) => {
      return v.Id === updateTask.Id;
    });
    if (index >= 0) {
      this.Tasks[index] = updateTask;
      return true;
    }
    return false;
  }

  public DeleteTask(deleteTask: Task): Boolean {
    const index = this.Tasks.findIndex((v, i, obj) => {
      return v.Id === deleteTask.Id;
    });
    if (index >= 0) {
      this.Tasks.splice(index, 1);
      return true;
    }
    return false;
  }

  public getTask(taskId: String) {
    const index = this.Tasks.findIndex((v, i, obj) => {
      return v.Id === taskId;
    });
    return this.Tasks[index];
  }

  public getCount(): number {
    return this.Tasks.length;
  }
}
