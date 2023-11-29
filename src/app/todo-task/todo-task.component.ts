import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.scss']
})
export class TodoTaskComponent {
@Input()
taskList = [];
@Output()
emitDone = new EventEmitter<string>();
@Output()
emitRemove = new EventEmitter<string>();
OnInit(){}

removeTask(task:string){
this.emitRemove.emit(task)
}
doneTask(task:string){
this.emitDone.emit(task)

}

}
