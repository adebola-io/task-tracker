import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import Task from '../Task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private API_URL = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) {}

  addTask(task: Task) {
    return this.http.post<Task>(`${this.API_URL}`, task);
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.API_URL);
  }

  deleteTask(task: Task) {
    const url = `${this.API_URL}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  toggleReminder(task: Task) {
    const url = `${this.API_URL}/${task.id}`;
    return this.http.put<Task>(url, { ...task, reminder: !task.reminder });
  }
}
