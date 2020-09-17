import { Component, OnInit } from '@angular/core';
//import { HardcodedAuthenticationService } from 'src/app/service/hardcoded-authentication.service';
//import { BasicAuthenticationServiceService } from 'src/app/service/basic-authentication-service.service';
import {JWTauthenticationService} from '../../service/jwtauthentication.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userName;
  // isUserLoggeedIn: boolean;
  constructor(
    //private hardcodedAuthenticationService: HardcodedAuthenticationService, 
    //private basicAuthService: BasicAuthenticationServiceService
    private JWTAuthService: JWTauthenticationService
    ) { }

  ngOnInit(): void {
    //this.userName = sessionStorage.getItem('user');
    // this.isUserLoggeedIn = this.hardcodedAuthenticationService.isLoggedIn();
    this.userName = this.JWTAuthService.getAuthenticatedUser();
  }

  isUserLoggedIn() {
    return this.JWTAuthService.isLoggedIn()
  }

}
