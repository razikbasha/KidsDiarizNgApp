import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  home(){
    this.router.navigate(['/']);
  }
  contactUs(){
    this.router.navigate(['/contact']);
  }
  about(){
    this.router.navigate(['/about']);
  }

}
