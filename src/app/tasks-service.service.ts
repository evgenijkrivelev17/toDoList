import { Injectable, OnInit } from '@angular/core';
import { Task } from './task';
import { Observable, } from 'rxjs';
import { HttpClient, HttpRequest, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable({
  providedIn: 'root'
})
export class TasksServiceService {

  url: any;
  header: HttpHeaders;

  Tasks: Task[];

  constructor(private http: HttpClient) {
    this.Tasks = [];

    this.url = {
      get: `http://localhost:4000/tasks/all`,
      add: `http://localhost:4000/tasks/add`,
      delete: `http://localhost:4000/tasks/delete`,
      update: `http://localhost:4000/tasks/update`
    };

    this.header = new HttpHeaders()
      .append(`Access-Control-Allow-Origin`, `*`)
      .append(`Access-Control-Allow-Headers`, `Origin, X-Requested-With, Content-Type, Accept, token`)
      .append(`Access-Control-Allow-Credentials`, `true`)
      .append(`Access-Control-Allow-Methods`, `GET, POST, PUT, DELETE`);

  }

  public async getTasks() {
    this.Tasks = [];
    await this.http.get(this.url.get).subscribe((doc) => {
      let _task = doc as any;
      for (let i = 0; i < _task.length; i++) {
        this.Tasks.push(new Task(
          _task[i]._id.toString(),
          _task[i].Task,
          _task[i].Description,
          _task[i].TimeDone,
          _task[i].TimeDone));
      }
    }, (error) => {
      console.log(error);
    });
  }

  public AddTask(newTask: Task) {
    this.http.post(this.url.add, newTask).subscribe((doc) => {
      let element = doc as any;
      this.Tasks.push(new Task(element._id.toString(),
        element.Task,
        element.Description,
        element.TimeDone,
        element.IsDone));
      console.log(doc);
    }, (error) => {
      console.log(error);
    });
  }

  public UpdateTask(updateTask: Task): Boolean {
    this.http.post(this.url.update, updateTask).subscribe((doc) => {
      const index = this.Tasks.findIndex((v, i, array) => {
        return v.Id === updateTask.Id;
      });
      if (index != -1) {
        this.Tasks[index] = updateTask;
        return true;
      }
      return false;
    }, (error) => {
      console.log(error);
      return false;
    });
  }

  public DeleteTask(deleteTask: Task): Boolean {
    this.http.post(this.url.delete, deleteTask).subscribe((doc) => {
      const index = this.Tasks.findIndex((v, i, obj) => {
        return v.Id === deleteTask.Id;
      });
      if (index >= 0) {
        this.Tasks.splice(index, 1);
        return true;
      }
      return false;
    }, (error) => {
      console.log(error);
      return false;
    });
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
