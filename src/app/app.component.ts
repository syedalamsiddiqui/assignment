import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment';
  show = true;
  toggleDiv() {
    this.show = !this.show;
  }
  value = 0;
  decreaseValue() {
    this.value--;
  }
  increaseValue() {
    this.value++;
  }

  data = ["Syed", "Arpit", "Tanuj", "Devendra", "Himanshu", "Priyansh", "Prashant", "Vineet", "Smita", "Jatin", "Rishab", "Bhavya", "Piyush", "Yogesh", "Ankit"];
  filteredData = this.data;
  filterData(inputSearch: string) {
    if (inputSearch.trim() == "") {
      this.filteredData = ["Please Enter a value!"];;
      return;
    }
    this.filteredData = this.data.filter((element) => {
      return element == inputSearch;
    })
    if (this.filteredData.length == 0) {
      this.filteredData = ["No such record found!"];
    }
  }

  changeData() {
    this.filteredData = this.data;
  }

  todos: any[] = [];
  addTodo(todotext: string) {
    if (todotext.trim() == '') {
      alert('Please enter valid input');
      return;
    }
    this.todos.push({ id: this.todos.length + 1, text: todotext })
  }
  deleteTodo(id: number) {
    this.todos = this.todos.filter((todo) => {
      return todo.id != id;
    })
  }
  ms:any = '0'+0;
  s:any = '0'+0;
  m:any = '0'+0;
  h:any = '0'+0;
  start: any;
  isRunning: boolean = false;
  startTimer(){
      if(this.isRunning==false){
        this.isRunning = true;
        this.start = setInterval(()=>{
          this.ms++;
          this.ms = this.ms<10 ?'0'+this.ms : this.ms;
          if(this.ms==100){
            this.ms='0'+0;
            this.s++;
            this.s= this.s<10?'0'+this.s:this.s;
          }
          if(this.s==60){
            this.s='0'+0;
            this.m++;
            this.m= this.s<10?'0'+this.m:this.m;
          }
          if(this.m==60){
            this.m='0'+0;
            this.h++;
            this.h= this.h<10?'0'+this.h:this.h;
          }
        },10)
      }
  }
  pauseTimer(){
    clearInterval(this.start);
    this.isRunning = false;
  }
  resetTimer(){
    this.isRunning = false;
    clearInterval(this.start);
    this.ms = this.s = this.m = this.h = '0'+0;
  }
}
