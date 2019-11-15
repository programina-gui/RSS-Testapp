import { FeedEntry } from './../../../datatypes/feed-entry';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


export interface DialogData {
  feedEntry: FeedEntry;
}

@Component({
  selector: 'app-full-news-popup',
  templateUrl: './full-news-popup.component.html',
  styleUrls: ['./full-news-popup.component.scss']
})
export class FullNewsPopupComponent implements OnInit {

  feedEntry: FeedEntry;
  date: Date;
  day: number;

  constructor(public dialogRef: MatDialogRef<FullNewsPopupComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.feedEntry = this.data.feedEntry;
    console.log(this.feedEntry.description);
    // this.date = this.data.feedEntry.pubDate;
    // this.day = this.date.getUTCDay();
  }

  close(): void {
      this.dialogRef.close();
  }

  ngOnInit() {
  }

}
