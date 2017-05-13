import { Injectable } from "@angular/core";
import { Headers, Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';
import { Todo } from "app/todo.model";
const API_END_POINT = 'https://oddworkstodo.herokuapp.com/todos';

@Injectable()
export class TodoService {
    todos: Todo[];

    constructor(private http: Http) {
        this.fetchAllTodos();
    }

    getTodos(): Promise<Todo[]> {
        return this.http.get(API_END_POINT)
        .toPromise()
        .then(response => response.json() as Todo[])
    }

    newTodo(model: Todo) {
        this.http.post(API_END_POINT,
            JSON.stringify({id: (this.todos.length + 1).toString(), topic: model.topic}),
            {headers: new  Headers({'Content-Type':'application/json'})})
            .toPromise()
            .then(()=>this.fetchAllTodos());
    }

    removeTodo(id: number) {
        this.http.delete(`${API_END_POINT}/${id}`)
        .toPromise()
        .then(()=>this.fetchAllTodos());
    }

    fetchAllTodos() {
        this.getTodos().then(todos => this.todos = todos);
    }
}
