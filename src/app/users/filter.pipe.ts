import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterType?: any): any {
    switch (filterType) {
      case 'Active':
        return value.filter(itme => { return  !itme.done; });  //將false 轉true

      case 'Completed':
        return value.filter(itme => { return itme.done; });

      default:
        return value;
    }

  }

}
