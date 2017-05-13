import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodoComponent} from 'app/todo.component';
import { AddTodoComponent} from 'app/add-todo.component';
import { TodoService} from 'app/todo.service';
import { ListTodoComponent } from "app/list-todo.component";

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    ListTodoComponent,
    AddTodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TodoService],
  bootstrap: [TodoComponent]
})
export class AppModule { }
