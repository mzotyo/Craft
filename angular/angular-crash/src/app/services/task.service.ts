import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  apiUrl: string = 'http://localhost:5000/tasks';

  constructor(private backend: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.backend.get<Task[]>(this.apiUrl);
  }

  deleteTask(taskId: number): Observable<Task> {
    return this.backend.delete<Task>(`${this.apiUrl}/${taskId}`);
  }

  updateTask(task: Task): Observable<Task> {
    return this.backend.put<Task>(
      `${this.apiUrl}/${task.id}`,
      task,
      httpOptions
    );
  }

  addTask(task: Task): Observable<Task> {
    return this.backend.post<Task>(this.apiUrl, task, httpOptions);
  }
}
