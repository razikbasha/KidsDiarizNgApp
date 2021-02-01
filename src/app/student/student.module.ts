import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NbAccordionModule, NbActionsModule, NbAlertModule, NbButtonModule, NbCalendarModule, NbCalendarRangeModule, NbCardModule, NbCheckboxModule, NbContextMenuModule, NbDatepickerModule, NbDialogModule, NbIconModule, NbInputModule, NbLayoutModule, NbListModule, NbMenuModule, NbProgressBarModule, NbRadioModule, NbSearchModule, NbSelectModule, NbSidebarModule, NbTabsetModule, NbThemeModule, NbToggleModule, NbTreeGridModule, NbUserModule } from "@nebular/theme";
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    StudentRoutingModule,
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
    NbActionsModule
  ]
})
export class StudentModule { }
