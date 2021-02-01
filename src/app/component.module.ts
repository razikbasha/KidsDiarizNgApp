import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NbAccordionModule, NbActionsModule, NbAlertModule, NbButtonModule, NbCalendarModule, NbCalendarRangeModule, NbCardModule, NbCheckboxModule, NbContextMenuModule, NbDatepickerModule, NbDialogModule, NbIconModule, NbInputModule, NbLayoutModule, NbListModule, NbMenuModule, NbProgressBarModule, NbRadioModule, NbSearchModule, NbSelectModule, NbSidebarModule, NbTabsetModule, NbThemeModule, NbToggleModule, NbTreeGridModule, NbUserModule } from "@nebular/theme";

@NgModule({
    imports:[
        BrowserModule,
        // ComponentModule,
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
        NbActionsModule
    ]
})
export class ComponentModule{}