import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShowHideComponent } from './show-hide/show-hide.component';
import { IncrementDecrementComponent } from './increment-decrement/increment-decrement.component';
import { SearchInArrayComponent } from './search-in-array/search-in-array.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowHideComponent,
    IncrementDecrementComponent,
    SearchInArrayComponent,
    TodoListComponent,
    StopwatchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
