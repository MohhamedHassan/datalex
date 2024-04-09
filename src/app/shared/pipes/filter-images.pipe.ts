import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterImages'
})
export class FilterImagesPipe implements PipeTransform {

  transform(value: any[]) {
    if(value?.length) return value.filter(i => i.image)
    else return [] 
  }

}
