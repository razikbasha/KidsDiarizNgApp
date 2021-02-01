import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private location:Location) {
   
   }

  ngOnInit() {
    console.log(this.location)
    console.log("Admin")
  }

}
