import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import Task from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  template: `
    <form class="task-form" (ngSubmit)="onSubmit()">
      <div class="form-control">
        <label for="text">Task Name</label>
        <input
          type="text"
          id="text"
          name="text"
          [(ngModel)]="text"
          placeholder="Add Task Name"
        />
      </div>
      <div class="form-control">
        <label for="date">Day and Time</label>
        <input
          type="text"
          id="date"
          name="date"
          [(ngModel)]="day"
          placeholder="Add Day and Time"
        />
      </div>

      <div class="form-control form-checkbox-control">
        <label for="reminder">Set Reminder</label>
        <input
          type="checkbox"
          [(ngModel)]="reminder"
          name="reminder"
          id="reminder"
        />
      </div>

      <app-button
        textColor="white"
        backgroundColor="var(--theme)"
        text="Save Task"
        layout="block"
      ></app-button>
    </form>
  `,
})
export class AddTaskComponent implements OnInit {
  text!: string;
  day!: string;
  reminder = false;
  @Output() onAddTask = new EventEmitter<Task>();
  constructor() {}
  ngOnInit(): void {}

  onSubmit() {
    if (!this.text) {
      alert('Please add a task name.');
      return;
    }
    if (!this.day) {
      alert('Please add a day and time for your task.');
      return;
    }

    const newTask: Task = {
      day: this.day,
      reminder: this.reminder,
      text: this.text,
    };

    this.onAddTask.emit(newTask);

    this.text = this.day = '';
    this.reminder = false;
  }
}
