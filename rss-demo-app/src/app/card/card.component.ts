import { DialogData } from '../modals/full-news-popup/full-news-popup.component';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FeedEntry } from '../models/feed-entry';
import { MatDialog } from '@angular/material/dialog';
import { FullNewsPopupComponent } from 'src/app/modals/full-news-popup/full-news-popup.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class NewsCardComponent implements OnInit  {

  @Input() feedEntry: FeedEntry;

  url: string;
  cardDescription: string;

  @Output()
  deleteEmitter = new EventEmitter<FeedEntry>();

  constructor(public dialog: MatDialog) {
  }

  share() {
    window.open(this.url);
  }

  cropDescription(feedEntry: FeedEntry) {
    let s = feedEntry.description;
    s = s.substring(0, 180);
    this.cardDescription = s;
    this.cardDescription = this.cardDescription + '...';
  }

  delete() {
    this.deleteEmitter.emit(this.feedEntry);
  }


  openDialog(): void {
    const data: DialogData = {
       feedEntry: this.feedEntry
    };

    const dialogRef = this.dialog.open(FullNewsPopupComponent, { data });
    dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed.');
      });
  }

  ngOnInit() {
    if (this.feedEntry)  {
      this.cropDescription(this.feedEntry);
      this.url = this.feedEntry.link;
    }
  }

}
