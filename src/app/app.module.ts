import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { StudentComponent } from './student/student.component';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student/student-routing.module';
import { StudentModule } from './student/student.module';
import { AdminModule } from './admin/admin.module';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import { ComponentModule } from './component.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NbAccordionModule, NbActionsModule, NbAlertModule, NbButtonModule, NbCalendarModule, NbCalendarRangeModule, NbCardModule, NbCheckboxModule, NbContextMenuModule, NbDatepickerModule, NbDialogModule, NbIconModule, NbInputModule, NbLayoutModule, NbListModule, NbMenuModule, NbProgressBarModule, NbRadioModule, NbSearchModule, NbSelectModule, NbSidebarModule, NbTabsetModule, NbThemeModule, NbToggleModule, NbTreeGridModule, NbUserModule } from "@nebular/theme";
import { Platform } from '@angular/cdk/platform';
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    AdminComponent,
    HomeComponent,
    ContactUsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    StudentModule,
    AdminModule,
    ComponentModule,
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
    BrowserAnimationsModule,
    NbCalendarModule,
    NbIconModule,
    NbActionsModule,
    NbSidebarModule.forRoot()

  ],
  providers: [Platform],
  bootstrap: [AppComponent]
})
export class AppModule { }
