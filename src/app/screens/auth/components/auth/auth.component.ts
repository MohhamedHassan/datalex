import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  constructor(private translateService:TranslateService){}
  changeLang() {
    let currentLang=localStorage.getItem('lang')||'en'
    let lang = currentLang=='en' ? 'ar' : 'en'
    if(lang=='ar') {
      document.body.classList.add('rt')
    } else {
      document.body.classList.remove('rt')
    }
    this.translateService.use(lang);
    localStorage.setItem('lang',lang)
    location.reload()
  }
  get lang() {
    return localStorage.getItem('lang')||'en'
  }
}
