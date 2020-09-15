import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import {HardcodedAuthenticationService} from '../../service/hardcoded-authentication.service'
import {BasicAuthenticationServiceService} from '../../service/basic-authentication-service.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'admin';
  password = 'admin';
  autherrorMessage = 'Ivalid credentials !'
  isAuthenticated = false
  window: any;

  constructor(private router: Router, 
    //private hardcodedAuthenticationService: HardcodedAuthenticationService, 
    private basicAuthService: BasicAuthenticationServiceService
    ) { }

  ngOnInit(): void {
  }

  // authenticate() {
  //   console.log('authenticating user');
  //   this.isAuthenticated = this.hardcodedAuthenticationService.authenticateUser(this.username, this.password);
  //   if(this.isAuthenticated) 
  //     this.router.navigate(['welcome', this.username]).then(() =>  this.window.location.reload());
  //   else 
  //     console.log('error while uthenticating user');
  // }

  authenticateBasic() {
    console.log('authenticating user');
    this.basicAuthService.executeBasisAuthenticationService(this.username, this.password).subscribe(
      data =>  {
        this.isAuthenticated = true;
        this.router.navigate(['welcome', this.username]).then(() =>  this.window.location.reload())
      },
      error => {
        this.isAuthenticated = false;
        console.log('error while uthenticating user');
      } 
    )
  }

}
