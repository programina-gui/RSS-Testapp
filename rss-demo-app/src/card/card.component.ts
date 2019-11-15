import { DialogData } from './../app/modals/full-news-popup/full-news-popup.component';
import { Component, Input, OnInit } from '@angular/core';
import { FeedEntry } from '../datatypes/feed-entry';
import { MatDialog } from '@angular/material/dialog';
import { FullNewsPopupComponent } from 'src/app/modals/full-news-popup/full-news-popup.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class NewsCardComponent implements OnInit  {

  @Input() cardContent: FeedEntry;

  url: string;
  cardDescription: string;

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
    console.log('me wants to delete');
  }


  openDialog(feedEntry: FeedEntry): void {
    const data: DialogData = {
       feedEntry: this.cardContent
    };

    const dialogRef = this.dialog.open(FullNewsPopupComponent, { data });
    dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed.');
      });
  }

  ngOnInit() {
    if (this.cardContent)  {
      this.cropDescription(this.cardContent);
      this.url = this.cardContent.link;
    }
  }

}
