import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

newTask: string;
@Output()
emitTask = new EventEmitter<string>();
constructor(){}

ngOnInit(): void {

}
add(){
this.emitTask.emit(this.newTask);
this.newTask='';
}


}
