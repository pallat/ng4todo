import { Component, OnInit } from '@angular/core';
import { TodoService } from "app/todo.service";

@Component({
    selector: 'app-add-todo',
    template: `
    <input id="topic" type="text" name="topic" [(ngModel)]="newTopic" (keyup.enter)="newTodo()" required minlength="4" maxlength="24" #topic="ngModel">
    <div *ngIf="topic.errors && (topic.dirty || topic.touched)"
        class="alert alert-danger">
        <div [hidden]="!topic.errors.required">
        Topic is required
        </div>
        <div [hidden]="!topic.errors.minlength">
        Topic must be at least 4 characters long.
        </div>
        <div [hidden]="!topic.errors.maxlength">
        Topic cannot be more than 24 characters long.
        </div>    
    </div>
    `
})

export class AddTodoComponent {
    newTopic:string;

    constructor(
        private todoService: TodoService
    ){}

    newTodo() {
        this.todoService.newTodo({id: (this.todoService.todos.length + 1).toString(), topic: this.newTopic});
    }
}
