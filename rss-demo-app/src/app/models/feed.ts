import { FeedInfo } from './feed-info';
import { FeedEntry } from './feed-entry';

export class Feed {
  status: string;
  feed: FeedInfo = new FeedInfo();
  items: FeedEntry[] = [new FeedEntry()];
}
