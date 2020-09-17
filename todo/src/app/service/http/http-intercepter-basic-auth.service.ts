import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { BasicAuthenticationServiceService } from '../basic-authentication-service.service';
import {JWTauthenticationService} from '../jwtauthentication.service'

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor(
    //private basicAuthService: BasicAuthenticationServiceService
    private JWTAuthService: JWTauthenticationService,
    ) { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //let userName='admin';
    //let password='admin';
    //let basicAuthHeaderString ='Basic '+ window.btoa(userName + ':' + password);
    let basicAuthHeaderString = this.JWTAuthService.getAuthenticatedToken();
    let user = this.JWTAuthService.getAuthenticatedToken();
    if(basicAuthHeaderString && user) {
      req = req.clone({
        setHeaders: {
          Authorization: basicAuthHeaderString
        }
      })
    }
    return next.handle(req);
  }
}
