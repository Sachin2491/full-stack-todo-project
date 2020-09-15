import { Component, OnInit } from '@angular/core';
//import { HardcodedAuthenticationService } from 'src/app/service/hardcoded-authentication.service';
import { BasicAuthenticationServiceService } from 'src/app/service/basic-authentication-service.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    //private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private basicAuthService: BasicAuthenticationServiceService) { }

  ngOnInit(): void {
    this.basicAuthService.logout();
  }

}
