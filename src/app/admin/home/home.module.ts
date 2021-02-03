import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbAccordionModule, NbActionsModule, NbAlertModule, NbButtonModule, NbCalendarModule, NbCalendarRangeModule, NbCardModule, NbCheckboxModule, NbContextMenuModule, NbDatepickerModule, NbDialogModule, NbIconModule, NbInputModule, NbLayoutModule, NbListModule, NbMenuModule, NbProgressBarModule, NbRadioModule, NbSearchModule, NbSelectModule, NbSidebarModule, NbTabsetModule, NbThemeModule, NbToggleModule, NbTreeGridModule, NbUserModule } from "@nebular/theme";
import { UsersComponent } from './users/users.component';
import { QueationsComponent } from './questions/queations.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NurseryComponent } from './classes/nursery/nursery.component';
import { LkgComponent } from './classes/lkg/lkg.component';
import { UkgComponent } from './classes/ukg/ukg.component';
import { FirstClassComponent } from './classes/first-class/first-class.component';
import { SecondclassComponent } from './classes/secondclass/secondclass.component';
import { ThirdclassComponent } from './classes/thirdclass/thirdclass.component';
import { FourthclassComponent } from './classes/fourthclass/fourthclass.component';
import { FifthclassComponent } from './classes/fifthclass/fifthclass.component';
import { QmoneComponent } from './questions/qmone/qmone.component';
import { QmtwoComponent } from './questions/qmtwo/qmtwo.component';
import { QmthreeComponent } from './questions/qmthree/qmthree.component';
import { QmfourComponent } from './questions/qmfour/qmfour.component';
import { ComponentModule } from 'src/app/component.module';
import { FormsModule } from '@angular/forms';
import { ImagesComponent } from './images/images.component';
import { SettingsComponent } from './settings/settings.component';
import { SubjectsComponent } from './subjects/subjects.component';




@NgModule({
  declarations: [UsersComponent, QueationsComponent, DashboardComponent, NurseryComponent, LkgComponent, UkgComponent, FirstClassComponent, SecondclassComponent, ThirdclassComponent, FourthclassComponent, FifthclassComponent, QmoneComponent, QmtwoComponent, QmthreeComponent, QmfourComponent, ImagesComponent, SettingsComponent, SubjectsComponent],
  imports: [
    CommonModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbButtonModule,
    NbSidebarModule,
    NbTabsetModule,
    FormsModule,
    NbInputModule,
    NbCardModule,
    NbListModule,
    NbListModule,
    NbMenuModule.forRoot(),
    NbSearchModule,
    NbContextMenuModule,
    NbSelectModule,
    NbTreeGridModule,
    NbDialogModule.forRoot(),
    NbCalendarRangeModule ,
    NbDatepickerModule.forRoot(),
    NbRadioModule,
    NbCheckboxModule,
    NbAccordionModule,
    NbToggleModule,
    NbAlertModule,
    NbContextMenuModule,
    NbUserModule,
    NbProgressBarModule,
    NbCalendarModule,
    NbIconModule,
    NbActionsModule,
  ]
})
export class HomeModule { }
