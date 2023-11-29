import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { AddTaskComponent } from './add-task/add-task.component';
import { TodoTaskComponent } from './todo-task/todo-task.component';
import { DoneTaskComponent } from './done-task/done-task.component';
import { DragGridComponent } from './drag-grid/drag-grid.component';


@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule,MatRadioModule, DragDropModule, FormsModule ],
  declarations: [ AppComponent, AddTaskComponent, TodoTaskComponent, DoneTaskComponent, DragGridComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
