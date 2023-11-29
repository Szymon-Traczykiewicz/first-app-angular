import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angulara';
  pi = Math.PI;
  date = new Date();
  dog = new Dog('BUREK', 4);
  dogs: Dog[] = [];

  addDogs(): void {
    this.dogs.push(new Dog('reksio', 4), new Dog('łatek', 3));
  }

  removeDogs(): void {
    this.dogs = [];
  }
  ///////////////////////////////////

days = ['monday','tuesday','wednesday','thursday', 'friday','saturday','sunday']

/////////////////////////

inputText = 'Tekst';
maxlengt = 5;
colorClass = 'color';
logUrl = '';

isDisable = true;

constructor(){
  setTimeout(()=>{
    this.isDisable = false;
  }, 3000)
}


change(){
  this.inputText = 'zmiana koloru i tekstu';
  this.maxlengt = 10;
  this.colorClass = 'color2';
  this.logUrl = '../favicon.ico'
}

textInput='';
classColor = 'color';
disable = true;

onfocus(){
  this.classColor= 'color2'
}

onClickk(e){
  console.log(e)
}

oNMauseMove(event){
  // console.log('x:'+event.clientX+'// Y:'+event.clientY)
}

onPAste(){
  this.textInput = 'NIE WKLEJAJ, WPISZ'
}

chaNge(){
  this.disable = false
}

// ///////////////////////////////////////

doneTasks:Array<string> = [];
tasksList:Array<string> = [];

add(task:string){
  this.tasksList.push(task);

}

removeTask(task:string){
this.tasksList=this.tasksList.filter(każdyElement => każdyElement  !== task)
};

doneTask(task:string){
this.doneTasks.push(task)
this.removeTask(task);
};
}






export class Dog {
  constructor(public name: string, public age: number) {}
}
