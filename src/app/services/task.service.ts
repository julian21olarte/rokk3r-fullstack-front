import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class TaskService {

    private url: string;
    private currentTask: any;
    constructor(private http: Http) {
        this.url = 'https://rokk3r-fullstack-back.herokuapp.com/task';
        //this.url = 'http://localhost:3000/task';
        this.currentTask = null;
    }

    public getTasks() {
        return this.http.get(this.url);
    }

    public addTask(task) {
        const data = {
            name: task.name,
            dueDate: task.dueDate,
            priority: task.priority
        };
        console.log(data);
        let url = this.url + '/create';
        url += '?name=' + task.name;
        url += '&dueDate=' + task.dueDate;
        url += '&priority=' + task.priority;
        console.log(url);
        return this.http.post(url, {});
    }

    public deleteTask(id) {
        return this.http.get(`${this.url}/destroy/${id}`);
    }

    public editTask(task) {
        return this.http.post(this.url + '/update', { task, taskId: task._id });
    }

    public getCurrentTask() {
        return this.currentTask;
    }

    public setCurrentTask(task: any) {
        console.log(task);
        this.currentTask = task;
    }

    public validateTask(task: any) {
        return task && !Object.values(task).some(val => val == null || val === undefined || val === '');
    }
}
