import { Route } from '@angular/router';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';


export const routes:Route[]=[
  {path:'',component:HomeComponent},
  {path:'contact',component:ContactUsComponent},
  {path:'about',component:AboutComponent},
  { path: 'student', loadChildren : () => import('./student/student.module').then(m => m.StudentModule)},
  { path: 'admin', loadChildren : () => import('./admin/admin.module').then(m => m.AdminModule)},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
