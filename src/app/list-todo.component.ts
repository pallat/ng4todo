import { Component, OnInit } from '@angular/core';
import { TodoService } from "app/todo.service";

@Component({
    selector: 'app-list-todo',
    template: `
    <li *ngFor="let todo of todoService.todos" (click)="todoService.removeTodo(todo.id)">
        <span class="badge">{{todo.topic}}</span>
    </li>
    `
})

export class ListTodoComponent {
    newTopic:string;

    constructor(
        private todoService: TodoService
    ){}
}
