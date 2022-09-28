import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Task from 'src/app/Task';

@Component({
  selector: 'app-task-item',
  template: `
    <div
      class="task"
      [ngClass]="{ reminder: task.reminder }"
      (dblclick)="onToggle.emit()"
    >
      <h3 [ngStyle]="{ display: 'flex', 'justify-content': 'space-between' }">
        {{ task.text }}
        <fa-icon
          (click)="onDelete.emit()"
          [ngStyle]="{ color: 'red' }"
          [icon]="faTimes"
        ></fa-icon>
      </h3>
      <p>{{ task.day }}</p>
    </div>
  `,
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  faTimes = faTimes;
  @Output() onDelete = new EventEmitter<Task>();
  @Output() onToggle = new EventEmitter<Task>();
  constructor() {}

  ngOnInit(): void {}
}
