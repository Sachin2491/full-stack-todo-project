import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoDataService } from 'src/app/service/todo-data.service';
import { ToDo } from 'src/app/model/todo.model';

@Component({
  selector: 'app-todo-create-update',
  templateUrl: './todo-create-update.component.html',
  styleUrls: ['./todo-create-update.component.css']
})
export class TodoCreateUpdateComponent implements OnInit {

  constructor(private router: Router, 
    private activeRoute: ActivatedRoute,
    private todoDataService: TodoDataService) { }


  id: number;
  todo: ToDo;

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id']
    if(this.id != -1)
      this.getToDoByID();
    else 
      this.todo = {
        id: undefined, taskName:"", taskDescription:"", targetDate: new Date(), completed: false
      }
  }

  getToDoByID() {
    this.todoDataService.getToDoById(this.id).subscribe(
      todo => this.todo = todo
    )
  }

  updateToDo() {
    if(this.id == -1) {
      this.todo.id = undefined;
      this.todoDataService.createToDo(this.todo).subscribe(
        todo => this.router.navigate(['todos']),
        error => console.log(error)
      )
    } else {
      this.todoDataService.updateToDo(this.id, this.todo).subscribe(
        todo => this.router.navigate(['todos']),
        error => console.log(error)
      )
    }
  }
}
