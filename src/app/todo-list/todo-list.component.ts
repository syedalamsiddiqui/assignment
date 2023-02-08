import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
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
}
