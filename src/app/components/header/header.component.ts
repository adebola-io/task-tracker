import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <h1>Task Tracker</h1>
      <app-button
        *ngIf="hasRoute('/')"
        [text]="showTaskForm ? 'Close' : 'Add'"
        textColor="white"
        [backgroundColor]="showTaskForm ? 'red' : 'var(--theme)'"
        (onclick)="toggleAddTask()"
      ></app-button>
    </header>
  `,
})
export class HeaderComponent implements OnInit {
  showTaskForm = false;
  subscription: Subscription;
  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService.onToggle().subscribe((value) => {
      this.showTaskForm = value;
    });
  }
  toggleAddTask() {
    this.uiService.toggleAddTask();
  }
  ngOnInit(): void {}
  hasRoute(route: string) {
    return this.router.url === route;
  }
}
