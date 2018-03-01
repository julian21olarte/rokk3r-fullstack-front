import { fadeBottom } from './../../animations/fadeBottom';
import { TaskService } from './../../services/task.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css'],
  animations: [
    fadeBottom
  ]
})
export class EditTaskComponent implements OnInit {

  private task: any;
  private formatDate: string;
  constructor(private activateRoute: ActivatedRoute, private router: Router, private taskService: TaskService) { }

  ngOnInit() {
    this.task = this.taskService.getCurrentTask();
    if (!this.taskService.validateTask(this.task)) {
      this.router.navigate(['home']);
      return;
    }
    this.formatDate = moment.utc(this.task.dueDate).format('YYYY-MM-DD');
  }

  public editTask(): void {
    this.task.dueDate = new Date(this.formatDate);
    this.taskService.editTask(this.task)
    .subscribe(taskUpdated => {
      alert('task updated successfully!');
      this.router.navigate(['home']);
    });
  }

}
