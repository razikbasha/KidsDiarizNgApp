import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { QueationsComponent } from './queations/queations.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [UsersComponent, QueationsComponent, DashboardComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
