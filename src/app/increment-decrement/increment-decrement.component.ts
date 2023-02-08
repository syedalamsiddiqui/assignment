import { Component } from '@angular/core';

@Component({
  selector: 'app-increment-decrement',
  templateUrl: './increment-decrement.component.html',
  styleUrls: ['./increment-decrement.component.css']
})
export class IncrementDecrementComponent {
  value = 0;
  decreaseValue() {
    this.value--;
  }
  increaseValue() {
    this.value++;
  }
}
