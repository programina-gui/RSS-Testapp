import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any, filter: any, defaultFilter: boolean): any {

  //   // Option 1
  //   if (!filter) {
  //     return items;
  //   }

  //   if (!Array.isArray(items)) {
  //     return items;
  //   }

  //   if (filter && Array.isArray(items)) {
  //     const filterKeys = Object.keys(filter);

  //     if (defaultFilter) {
  //       return items.filter(item =>
  //           filterKeys.reduce((x, keyName) =>
  //               (x && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] === '', true));
  //     } else {
  //       return items.filter(item => {
  //         return filterKeys.some((keyName) => {
  //           return new RegExp(filter[keyName], 'gi').test(item[keyName]) || filter[keyName] === '';
  //         });
  //       });
  //     }
  //   }


  //   // Option 2

  //   transform(items: any[], searchText: string): any[] {
  //     if(!items) return [];
  //     if(!searchText) return items;
  // searchText = searchText.toLowerCase();
  // return items.filter( it => {
  // tslint:disable-next-line: max-line-length
  //       return it.president.toLowerCase().includes(searchText) || it.party.toLowerCase().includes(searchText) || it.took_office.toLowerCase().includes(searchText);
  //     });
  //    }
  }

}
