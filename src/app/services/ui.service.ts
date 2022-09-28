import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showTaskForm = false;
  private subject = new Subject<any>();
  constructor() {}
  toggleAddTask() {
    this.showTaskForm = !this.showTaskForm;
    this.subject.next(this.showTaskForm);
  }
  onToggle() {
    return this.subject.asObservable();
  }
}
