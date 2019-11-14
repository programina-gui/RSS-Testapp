import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/';
import { map } from 'rxjs/operators';
import { Feed } from './../datatypes/feed';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private feedURL = 'https://dev98.de/';

  constructor(
    private http: HttpClient
  ) { }

  getFeedContent(): Observable<Feed> {
    return this.http.get<Feed>(this.feedURL);
            // .map(this.parseResponse)
            // .catch(this.handleError);
  }

  // private parseResponse(res: Response): Feed {
  //   const feed = res.json();
  //   return feed || { };
  // }

  // private handleError(error: any) {
  //   const errMsg = (error.message) ? error.message :
  //     error.status ? `${error.status} - ${error.statusText}` : 'Oops! An error\'s coming from the server.';
  //   console.error(errMsg);
  //   return Observable.throw(errMsg);
  // }
}
