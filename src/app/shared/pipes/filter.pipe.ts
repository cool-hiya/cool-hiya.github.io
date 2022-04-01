import {Pipe, PipeTransform} from '@angular/core';
import {filter} from 'lodash';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(data: any[], params?: any): any {
    if (!data) {
      return [];
    }

    if (!params) {
      return data;
    }

    return filter(data, params);
  }
}
