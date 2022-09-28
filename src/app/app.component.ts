import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <div class="app">
      <app-header> </app-header>
      <router-outlet></router-outlet>
      <app-footer *ngIf="isHome"></app-footer>
    </div>
  `,
})
export class AppComponent {
  constructor(private router: Router) {}
  isHome = this.router.url === '/';
}
