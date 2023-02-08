import { Component } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent {
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
