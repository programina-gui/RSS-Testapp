import { Feed } from './models/feed';
import { ApiService } from './api.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { FeedEntry } from './models/feed-entry';
import { Observable } from 'rxjs';
import { ConfirmDialogComponent, DialogConfig} from './modals/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';

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
  logo = 'assets/cropped-logo_50px.png';
  spinnerState = false;
  searchText: string;
  isSearchBar = false;
  confirm$: Observable<boolean>;

  constructor(private apiService: ApiService, public dialog: MatDialog) {
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

  toggleSearchBar() {
    if (!this.isSearchBar) {
      this.isSearchBar = true;
    } else {
      this.isSearchBar = false;
    }
  }


  deleteCard(card: FeedEntry) {
     const dialog: DialogConfig = {
      title: 'Delete',
      content: 'If you press delete, you will never see this post again. ... Just kidding, just hit refresh.',
      close: 'Cancel',
      ok: 'OK'
    };
    const dialogRef = this.dialog.open(ConfirmDialogComponent, { width: '250px', data: dialog });
    dialogRef.afterClosed().subscribe( 
       (result) => {
      if (!result){
        console.log('Delete dialog was closed');
      } else {
          this.cards = this.cards.filter(fdEntry => fdEntry !== card);
      };
      }
    );


  
  }

  ngOnInit() {
    this.refresh();
  }


}
