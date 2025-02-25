import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Route, Router } from '@angular/router';
//import { HardcodedAuthenticationService } from './hardcoded-authentication.service';
//import { BasicAuthenticationServiceService } from './basic-authentication-service.service';
import {JWTauthenticationService} from './jwtauthentication.service'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGurdService implements CanActivate{

  constructor(
    //private hardCodedAuthenticationService: HardcodedAuthenticationService,
    //private basicAuthService: BasicAuthenticationServiceService,
    private JWTAuthService: JWTauthenticationService,
    private router: Router
  ) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    if(this.JWTAuthService.isLoggedIn())
      return true;
    this.router.navigate(['login']);
    return false; 
  }
}
