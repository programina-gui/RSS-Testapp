import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateAgo'
})
export class DateAgoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {

      const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
      const intervals = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1
      };

      let counter;

      if (seconds < 29) {
        value = 'Just now';
      } else {
          // tslint:disable-next-line: forin
          for (const i in intervals) {
            counter = Math.floor(seconds / intervals[i]);
            if (counter > 0) {
              if (counter === 1) {
                value = counter + ' ' + i + ' ago'; // singular (1 day ago)
              } else {
                value = counter + ' ' + i + 's ago'; // plural (2 days ago)
              }
            }
          }
        }

    }
    return value;
  }

}
