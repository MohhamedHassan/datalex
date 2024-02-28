import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GlopalService } from 'src/app/shared/services/glopal.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  {
  constructor(
    public translateService:TranslateService,
    public glopalService:GlopalService
    ) {}
  openNav=false
  selcetedSubMenu=-1


  closeSubMenu(event:any) {
    if(event.target.nodeName!='A' && event.target.nodeName!='I') {
      this.selcetedSubMenu=-1
    }
  }
  changeLang(lang:string) {
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
