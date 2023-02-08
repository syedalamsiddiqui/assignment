import { Component } from '@angular/core';

@Component({
  selector: 'app-show-hide',
  templateUrl: './show-hide.component.html',
  styleUrls: ['./show-hide.component.css']
})
export class ShowHideComponent {
  show = true;
  toggleDiv() {
    this.show = !this.show;
  }
}
