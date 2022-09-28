import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div>
      <h2>Task Tracker</h2>
      <h4>Version: 1.0.0</h4>
      <a routerLink="/">Go Back</a>
    </div>
  `,
})
export class AboutComponent implements OnInit {
  ngOnInit(): void {}
}
