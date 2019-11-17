import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) {return []; }
    if (!searchText) {return items; }
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      // tslint:disable-next-line: max-line-length
      return it.title.toLowerCase().includes(searchText) || it.description.toLowerCase().includes(searchText) || it.author.toLowerCase().includes(searchText);
    });
  };
}