import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GlopalService } from './shared/services/glopal.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private glopalService:GlopalService,private translateService:TranslateService){}
  ngOnInit(): void {
    this.glopalService.getNavbarAndFooterData()
    this.glopalService.getPages()

    this.lang()
   
    }

 lang() {
  let lang = localStorage.getItem('lang')||'en'
  this.translateService.setDefaultLang('en')
  this.translateService.use(lang)
  if(lang=='ar') {
    document.body.classList.add('rt')
  } else {
    document.body.classList.remove('rt')
  }
 }  
 @HostListener('window:resize', ['$event'])
 onResize(event:any) {
  this.glopalService.bodyPaddingTop=`${document.querySelector('nav')?.offsetHeight}px`
 }
}
