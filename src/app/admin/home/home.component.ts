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
          link : "/nursery"
        },
        {
          title : "LKG",
          link : "/lkg"
        },
        {
          title : "UKG",
          link : "/ukg"
        },
        {
          title : "1st Class",
          link : "/firstclass"
        },
        {
          title : "2nd Class",
          link : "/secondclass"
        },
        {
          title : "3rd Class",
          link : "/thirdclass"
        },
        {
          title : "4th Class",
          link : "/fourthclass"
        },
        {
          title : "5th Class",
          link : "/fifthclass"
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
          title : "QModel1",
          link : "/qmone"
        },
        {
          title : "QModel2",
          link : "/qmtwo"
        },
        {
          title : "QModel3",
          link : "/qmthree"
        },
        {
          title : "QModel4",
          link : "/qmfour"
        }
      ]
    },
    {
      title: 'Images',
      link:'/images'
    },
    {
      title: 'Users',
      link:'/users'
    },
    {
      title: 'Settings',
      link:'/setting'
    }
  ]
}
