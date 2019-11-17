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
import { DateAgoPipe } from './pipes/date-ago.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { AutofocusDirective } from './autofocus.directive';


@NgModule({
  declarations: [
    AppComponent,
    NewsCardComponent,
    FullNewsPopupComponent,
    DateAgoPipe,
    StripHtmlTagsPipe,
    FilterPipe,
    AutofocusDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiService],
  entryComponents: [ FullNewsPopupComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
