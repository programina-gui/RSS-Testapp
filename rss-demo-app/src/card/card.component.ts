import { DialogData } from './../app/modals/full-news-popup/full-news-popup.component';
import { Component, Input } from '@angular/core';
import { FeedEntry } from '../datatypes/feed-entry';
import { MatDialog } from '@angular/material/dialog';
import { FullNewsPopupComponent } from 'src/app/modals/full-news-popup/full-news-popup.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class NewsCardComponent  {

  @Input() cardContent: FeedEntry;

  constructor(public dialog: MatDialog) {

  }

  extractDeeplink() {

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
        if (result) {
              alert('This does not really create a viewing.');
        }
      });
  }

}
