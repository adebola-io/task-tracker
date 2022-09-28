import { Component, OnInit } from '@angular/core';
import Task from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tasks',
  template: `
    <app-add-task
      *ngIf="showTaskForm"
      (onAddTask)="addTask($event)"
    ></app-add-task>
    <app-task-item
      [ngStyle]="{ display: 'block', 'margin-top': '30px' }"
      *ngFor="let task of tasks"
      [task]="task"
      (onDelete)="deleteTask(task)"
      (onToggle)="toggleReminder(task)"
    >
    </app-task-item>
  `,
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  showTaskForm = false;
  subscription: Subscription;
  constructor(private taskService: TaskService, private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => {
      this.showTaskForm = value;
    });
  }
  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((task) => {
      this.tasks.push(task);
    });
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter((t) => task.id !== t.id);
    });
  }

  toggleReminder(task: Task) {
    this.taskService.toggleReminder(task).subscribe(() => {
      task.reminder = !task.reminder;
    });
  }
}
