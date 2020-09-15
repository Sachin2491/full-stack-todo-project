
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToDo } from '../model/todo.model';
import {BASE_URL} from '../app.constant'

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private httpClient: HttpClient) { }

  public getAllToDos() : Observable<ToDo[]> {

    //Create header with basic autherisaztion 
    // let headerString = this.createBasicAuthentication();
    // let headers = new HttpHeaders({
    //   Autherisaztion: headerString
    // });

    // return this.httpClient.get<ToDo[]>(`http://localhost:8080/v1/api/todos`, {headers: headers});
    return this.httpClient.get<ToDo[]>(`${BASE_URL}/todos`);
  }

  public getToDoById(id) : Observable<ToDo> {
    return this.httpClient.get<ToDo>(`${BASE_URL}/todos/${id}`);
  }

  public updateToDo(id, todo) : Observable<ToDo> {
    return this.httpClient.put<ToDo>(`${BASE_URL}/todos/${id}`, todo);
  }

  public createToDo(todo) : Observable<ToDo> {
    return this.httpClient.post<ToDo>(`${BASE_URL}/todos`, todo);
  }

  public deleteToDo(id){
    return this.httpClient.delete(`${BASE_URL}/todos/${id}`);
  }

  // createBasicAuthentication() {
  //   let userName='admin';
  //   let password='admin';
  //   let basicAuthHeaderString ='Basic '+ window.btoa(userName + ':' + password);
  //   return basicAuthHeaderString;
  // }
}
