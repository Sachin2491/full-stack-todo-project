import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ErrorComponent } from './components/error/error.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AuthenticationGurdService } from './service/authentication-gurd.service';
import { TodoCreateUpdateComponent } from './components/todo-create-update/todo-create-update.component';

const routes: Routes = [
  {path: '', component: LoginComponent },
  {path: 'login', component: LoginComponent },
  {path: 'logout', component: LogoutComponent, canActivate: [AuthenticationGurdService] },
  {path: 'welcome/:name', component: WelcomeComponent,canActivate: [AuthenticationGurdService] },
  {path: 'todos', component: TodoListComponent, canActivate: [AuthenticationGurdService]},
  {path: 'todos/:id', component: TodoCreateUpdateComponent, canActivate: [AuthenticationGurdService]},
  {path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
