import { Component } from '@angular/core';

@Component({
  selector: 'app-search-in-array',
  templateUrl: './search-in-array.component.html',
  styleUrls: ['./search-in-array.component.css']
})
export class SearchInArrayComponent {
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
}
