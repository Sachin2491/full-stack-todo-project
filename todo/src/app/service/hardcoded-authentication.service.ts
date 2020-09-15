import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticateUser(userName, password) : boolean {
     if(userName === 'admin' && password === 'admin') {
       sessionStorage.setItem('user', userName);
       return true;
     }
     return false;
  }

  isLoggedIn() : boolean {
    const userName = sessionStorage.getItem('user')
    return !!userName;
  }

  logout() {
    sessionStorage.removeItem('user');
  } 
}
