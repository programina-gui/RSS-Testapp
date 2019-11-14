import { Feed } from './../datatypes/feed';
import { ApiService } from './api.service';
import { Component, OnInit } from '@angular/core';
import { switchMap} from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rss-demo-app';
  feedContent$;
  feed: Feed;

  constructor(private apiService: ApiService)  {

  }

  // tslint:disable-next-line: ban-types
  mapFeedToModel(feedContent: any): Observable<Object> {
    this.feed = new Feed();
    this.feed = feedContent.data;
    return new Observable<{}>();
  }

  ngOnInit() {
    this.feedContent$ = this.apiService.getFeedContent()
    .pipe(
      switchMap(feedContent => this.mapFeedToModel(feedContent))
    );
  }


}
