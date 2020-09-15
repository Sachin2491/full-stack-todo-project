import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToDo } from '../../model/todo.model';
import { TodoDataService } from '../../service/todo-data.service'

@Component({
  selector: 'app-todo-list',
templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: ToDo[] = [];

  constructor(private router: Router, private todoDataService: TodoDataService) { }

  ngOnInit(): void {
    this.getAllToDos();
  }

  getAllToDos() {
    return this.todoDataService.getAllToDos().subscribe(
      todos => this.todos = todos
    )
  }

  editToDo(id) {
    this.router.navigate(['todos', id])
  }

  deleteToDo(id) {
    this.todoDataService.deleteToDo(id).subscribe(
      () => this.getAllToDos(),
      error => console.log(error)
    )
  }

  createToDo() {
    this.router.navigate(['todos', -1])
  }

}