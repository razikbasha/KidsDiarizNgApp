import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HomeComponent } from "./home.component";
import { QueationsComponent } from "./queations/queations.component";
import { UsersComponent } from "./users/users.component";
export const routes : Route[] = [
    {path:'',component:HomeComponent,
    children:[
        {path:'dashboard',component:DashboardComponent},
        {path:'users',component:UsersComponent},
        {path:'queations',component:QueationsComponent},
    ]
},
];
@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})

export class HomeRoutingModule { }
