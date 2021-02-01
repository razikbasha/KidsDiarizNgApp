import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentModule } from '../component.module';
import { NbAccordionModule, NbActionsModule, NbAlertModule, NbButtonModule, NbCalendarModule, NbCalendarRangeModule, NbCardModule, NbCheckboxModule, NbContextMenuModule, NbDatepickerModule, NbDialogModule, NbIconModule, NbInputModule, NbLayoutModule, NbListModule, NbMenuModule, NbProgressBarModule, NbRadioModule, NbSearchModule, NbSelectModule, NbSidebarModule, NbTabsetModule, NbThemeModule, NbToggleModule, NbTreeGridModule, NbUserModule } from "@nebular/theme";
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import {HomeComponent} from './home/home.component';
import { AdminRoutingModule } from './admin.router';
import { HomeRoutingModule } from './home/home.router';
import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [LoginComponent,HomeComponent],
  imports: [
    HomeModule,
    AdminRoutingModule,
    HomeRoutingModule,
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
    // HomeModule
    
  ]
})
export class AdminModule { }
