import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private sidebarService: NbSidebarService
  ) { }

  ngOnInit() {
  }
  toggle() {
    this.sidebarService.toggle(false, 'left');
  }
  items = [
    {
      title: 'Dashboard',
      link : '/dashboard'
    },
    {
      title:"Classes",
      children :[
        {
          title : "Nursery",
          link : "/queation1"
        },
        {
          title : "LKG",
          link : "/queation2"
        },
        {
          title : "UKG",
          link : "/queation3"
        },
        {
          title : "1st Class",
          link : "/queation4"
        },
        {
          title : "2nd Class",
          link : "/queation4"
        },
        {
          title : "3rd Class",
          link : "/queation4"
        },
        {
          title : "4th Class",
          link : "/queation4"
        },
        {
          title : "5th Class",
          link : "/queation4"
        }
       
      ]
    },
    {
      title: 'Subjects',
      link : '/subjects'
    },
    {
      title:"Queation Models",
      children :[
        {
          title : "Queation1",
          link : "/queation1"
        },
        {
          title : "Queation2",
          link : "/queation2"
        },
        {
          title : "Queation3",
          link : "/queation3"
        },
        {
          title : "Queation4",
          link : "/queation4"
        }
      ]
    },
    {
      title: 'Upload Images',
      link:'/uploadimages'
    },
    {
      title: 'Images',
      link:'/uploadimages'
    },
    {
      title: 'Users',
      link:'/users'
    }
  ]
}
