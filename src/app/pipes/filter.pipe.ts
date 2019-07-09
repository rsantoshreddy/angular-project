import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filteredKey: string, property: string): any {
    if (filteredKey === '') return value;
    const list = [];
    for (const item of value) {
      if (item[property] === filteredKey) {
        list.push(item);
      }
    }
    return list;
  }
}
