import { Component } from '@angular/core';

@Component({
    selector: 'app-todo',
    template: `
    <h2>{{title}}</h2>
    <app-add-todo>Loading...</app-add-todo>
    <app-list-todo></app-list-todo>
    `
})

export class TodoComponent {
    title: string;
}
