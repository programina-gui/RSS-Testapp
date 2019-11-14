import { Feed } from './../datatypes/feed';
import { ApiService } from './api.service';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { FeedEntry } from './../datatypes/feed-entry'
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rss-demo-app';
  // tslint:disable-next-line: ban-types
  feedContent$: Observable<Object>;
  feed: Feed;
  feedEntry: FeedEntry;
  displayedCard = `<card [cardContent]={{card}}></card>`;
  cards = [];

  constructor(private apiService: ApiService) {

  }

  refresh() {
    this.feedContent$ = this.apiService.getFeedContent()
      .pipe(
        switchMap(feedContent => this.mapFeedToModel(feedContent))
      );
  }

  // tslint:disable-next-line: ban-types
  mapFeedToModel(feedContent: any): Observable<Object> {
    console.log('this is the URL output from our feed ', feedContent);
    this.feed = feedContent;
    this.cards = [];
    this.cards = feedContent.items;
    return new Observable<{}>();
  }

  ngOnInit() {
    this.refresh();
  }


}
