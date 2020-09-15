import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {


  userName ='';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.userName = this.route.snapshot.params['name']
    if(this.userName !== sessionStorage.getItem('user'))
      this.router.navigate(['error']);
  }

}
