import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BASE_URL, TOKEN, USER } from 'src/app/app.constant';

@Injectable({
  providedIn: 'root'
})
export class JWTauthenticationService {

  constructor(private httpClient: HttpClient) { }
  
  executeJWTAuthenticationService(username, password) {

    return this.httpClient.post<any>(`${BASE_URL}/authenticate`, {
      username,
      password
    }).pipe(
      map(
        data=> {
        sessionStorage.setItem(USER, username);
        sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
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
