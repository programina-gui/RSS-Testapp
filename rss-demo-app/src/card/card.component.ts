import { Component, OnInit, Input } from '@angular/core';
import { FeedEntry } from '../datatypes/feed-entry';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class NewsCardComponent implements OnInit {

  @Input() cardContent: FeedEntry;

  constructor() {
    this.cardContent = new FeedEntry();
  }

  delete(){
    console.log('me wants to delete');
  }

  ngOnInit() {
  }

}
