import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lang'
})
export class LangPipe implements PipeTransform {

  transform(valueEn:string='',valueAr:string=''): string {
    if(this.lang=='ar') return valueAr
    else return valueEn
  }
  get lang() {
    return localStorage.getItem('lang')||'en'
  }
}
