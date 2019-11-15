import { Feed } from './../datatypes/feed';
import { ApiService } from './api.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { FeedEntry } from './../datatypes/feed-entry';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './loading-dots.scss']
})
export class AppComponent implements OnInit {
  title = 'rss-demo-app';
  // tslint:disable-next-line: ban-types
  feedContent$: Observable<Object>;
  feed: Feed;
  feedEntry: FeedEntry;
  cards = [];
  // hideCard = false;
  logo = '../assets/cropped-logo_50px.png';
  spinnerState = false;
  searchText: string;
  // toggleSearch = false;

  @ViewChild('searchbar', {static: false}) searchbar: ElementRef;

  constructor(private apiService: ApiService) {

  }


  refresh() {
    this.spinnerState = true;
    this.feedContent$ = this.apiService.getFeedContent()
      .pipe(
        switchMap(feedContent => this.mapFeedToModel(feedContent))
      );
    setTimeout( () => {this.spinnerState = false; }, 2000) ;
  }

  // tslint:disable-next-line: ban-types
  mapFeedToModel(feedContent: any): Observable<Object> {
    this.feed = feedContent;
    this.cards = [];
    this.cards = feedContent.items;
    return new Observable<{}>();
  }

  // toggleCard(hideCard: boolean) {
  //   if (!this.hideCard) {
  //     this.hideCard = true;
  //   } else {
  //     this.hideCard = false;
  //   }
  // }

  deleteCard(card: FeedEntry) {
    this.cards = this.cards.filter(fdEntry => fdEntry !== card);
    // TODO: create pop-up with a warning or a slide that asks you if you want to delete it
  }

  ngOnInit() {
    this.refresh();
  }


}
