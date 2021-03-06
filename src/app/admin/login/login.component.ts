import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router:Router,
  ) { }

  ngOnInit() {
    console.log(this.router.url)
  }
  home(){
    this.router.navigate(['/home']);
  }
}
