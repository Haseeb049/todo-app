import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 

import { TodoService, Todo } from './services/todo.service'; 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule], 
  template: `
    <h1>TODO App</h1>
    <input [(ngModel)]="newTask" placeholder="Add new task" />
    <button (click)="addTodo()">Add</button>
    <ul>
      <li *ngFor="let todo of todos">
        {{ todo.task }}
        <button (click)="deleteTodo(todo.id)">Delete</button>
      </li>
    </ul>
  `
})
export class AppComponent implements OnInit {
  todos: Todo[] = [];
  newTask = '';

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getTodos().subscribe(data => this.todos = data);
  }

  addTodo() {
    if (!this.newTask.trim()) return;
    this.todoService.addTodo(this.newTask).subscribe(() => {
      this.newTask = '';
      this.getTodos();
    });
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id).subscribe(() => this.getTodos());
  }
}
