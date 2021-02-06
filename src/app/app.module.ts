import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewYearComponent } from './new-year/new-year.component';
import { WeekendsCounterComponent } from './weekends-counter/weekends-counter.component';
import {FormsModule} from '@angular/forms';
import { DateOfBirthComponent } from './date-of-birth/date-of-birth.component';
import { DifferenceBetweenComponent } from './difference-between/difference-between.component';
import { TicketComponent } from './ticket/ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    NewYearComponent,
    WeekendsCounterComponent,
    DateOfBirthComponent,
    DifferenceBetweenComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
