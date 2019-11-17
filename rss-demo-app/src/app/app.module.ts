import { NewsCardComponent } from './card/card.component';

import { StripHtmlTagsPipe } from './pipes/strip-html-tags.pipe';
import { ApiService } from './api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material.module';
import { FullNewsPopupComponent } from './modals/full-news-popup/full-news-popup.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { AutofocusDirective } from './autofocus.directive';
import {TimeAgoPipe} from 'time-ago-pipe';
import { ConfirmDialogComponent } from './modals/confirm-dialog/confirm-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    NewsCardComponent,
    FullNewsPopupComponent,
    StripHtmlTagsPipe,
    FilterPipe,
    AutofocusDirective,
    TimeAgoPipe,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiService],
  entryComponents: [ FullNewsPopupComponent, ConfirmDialogComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
