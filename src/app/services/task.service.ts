import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TaskService {

    private url: string;
    private currentTask: any;
    constructor(private http: Http) {
        this.url = 'https://rokk3r-fullstack-back.herokuapp.com/task';
        //this.url = 'http://localhost:3000/task';
        this.currentTask = null;
    }

    public getTasks(): Observable<any> {
        return this.http.get(this.url);
    }

    public addTask(task): Observable<any> {
        const data = {
            name: task.name,
            dueDate: task.dueDate,
            priority: task.priority
        };
        let url = this.url + '/create';
        url += '?name=' + task.name;
        url += '&dueDate=' + task.dueDate;
        url += '&priority=' + task.priority;
        return this.http.post(url, {});
    }

    public deleteTask(id): Observable<any> {
        return this.http.get(`${this.url}/destroy/${id}`);
    }

    public editTask(task): Observable<any> {
        return this.http.post(this.url + '/update', { task, taskId: task._id });
    }

    public getCurrentTask(): any {
        return this.currentTask;
    }

    public setCurrentTask(task: any): any {
        this.currentTask = task;
    }

    public validateTask(task: any): Boolean {
        return task && !Object.values(task).some(val => val == null || val === undefined || val === '');
    }
}
