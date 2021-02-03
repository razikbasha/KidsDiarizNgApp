import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HomeComponent } from "./home.component";
import { NurseryComponent } from "./classes/nursery/nursery.component";
import { QueationsComponent } from "./questions/queations.component";
import { UsersComponent } from "./users/users.component";
import { LkgComponent } from "./classes/lkg/lkg.component";
import { UkgComponent } from "./classes/ukg/ukg.component";
import { FirstClassComponent } from "./classes/first-class/first-class.component";
import { SecondclassComponent } from "./classes/secondclass/secondclass.component";
import { ThirdclassComponent } from "./classes/thirdclass/thirdclass.component";
import { FourthclassComponent } from "./classes/fourthclass/fourthclass.component";
import { FifthclassComponent } from "./classes/fifthclass/fifthclass.component";
import { QmoneComponent } from "./questions/qmone/qmone.component";
import { QmtwoComponent } from "./questions/qmtwo/qmtwo.component";
import { QmthreeComponent } from "./questions/qmthree/qmthree.component";
import { QmfourComponent } from "./questions/qmfour/qmfour.component";
import { ImagesComponent } from "./images/images.component";
import { SettingsComponent } from "./settings/settings.component";
import { SubjectsComponent } from "./subjects/subjects.component";

export const routes : Route[] = [
    {path:'',component:HomeComponent,
    children:[
        {path:'dashboard',component:DashboardComponent},
        {path:'users',component:UsersComponent},
        {path:'queations',component:QueationsComponent},
        {path:'images',component:ImagesComponent},
        {path:'setting',component:SettingsComponent},
        {path:'subjects',component:SubjectsComponent},
        {path:'nursery',component:NurseryComponent},
        {path:'lkg',component:LkgComponent},
        {path:'ukg',component:UkgComponent},
        {path:'firstclass',component:FirstClassComponent},
        {path:'secondclass',component:SecondclassComponent},
        {path:'thirdclass',component:ThirdclassComponent},
        {path:'fourthclass',component:FourthclassComponent},
        {path:'fifthclass',component:FifthclassComponent},
        {path:'qmone',component:QmoneComponent},
        {path:'qmtwo',component:QmtwoComponent},
        {path:'qmthree',component:QmthreeComponent},
        {path:'qmfour',component:QmfourComponent},
    ]
},
];
@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})

export class HomeRoutingModule { }
