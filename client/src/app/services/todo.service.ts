import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Todo {
  id: number;
  task: string;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = 'http://localhost:5139/api/todo';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl);
  }

  addTodo(title: string): Observable<Todo> {
    return this.http.post<Todo>(this.apiUrl, { task: title }); // NOT newTodo
  }
  

  deleteTodo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
