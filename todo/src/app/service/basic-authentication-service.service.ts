import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators'
import { USER, TOKEN, BASE_URL } from '../app.constant';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationServiceService {

  constructor(private httpClient: HttpClient) { }


  executeBasisAuthenticationService(userName, password) {
    let basicAuthString = 'Basic ' + window.btoa(userName + ':'+ password);
    let headers = new HttpHeaders({
      Authorization: basicAuthString
    })
    return this.httpClient.get<AuthenticationBean>(`${BASE_URL}/auth/basicauth`, {headers: headers}).pipe(
      map(
        data=> {
        sessionStorage.setItem(USER, userName);
        sessionStorage.setItem(TOKEN, data.message);
        return data;
        }
      )
    )
  }

  isLoggedIn() : boolean {
    return !!this.getAuthenticatedUser() && !!this.getAuthenticatedToken()

  }

  getAuthenticatedUser() : string {
    return sessionStorage.getItem(USER)
  }

  getAuthenticatedToken() : string {
    return sessionStorage.getItem(TOKEN)
  }

  logout() {
    sessionStorage.removeItem(USER);
    sessionStorage.removeItem(TOKEN);
  }

}

export class AuthenticationBean {
  message: string;
}