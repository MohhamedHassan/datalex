import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval, map, skipWhile } from 'rxjs';
import { MainContainerWithHeader } from 'src/app/shared/models/main-container-with-header';
import { MainSection } from 'src/app/shared/models/main-section';
import { Taps } from 'src/app/shared/models/taps';
import { GlopalService } from 'src/app/shared/services/glopal.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit,OnDestroy {
  pageData!:MainContainerWithHeader
  subscribtion!:Subscription
  taps!:Taps[]
  sections!:MainSection[]
  constructor(private glopalService:GlopalService) {}
 ngOnInit(): void {
   let aboutData$ =  this.glopalService.pages.pipe(
      skipWhile(val=>val==null),
      map(res =>   res?.find(item => item.title== "About Datlex4ai"))
    )
    this.subscribtion =  aboutData$.subscribe(
      (res:{main_section:MainContainerWithHeader;sections:MainSection[];navbars:{navbar_items_container:Taps[]}[]})=>{
        this.pageData=res.main_section
        if(res?.navbars?.length) this.taps=res?.navbars[0]?.navbar_items_container
        if(res?.sections?.length) this.sections=res?.sections
      }
    )
 }
 ngOnDestroy(): void {
   if(this.subscribtion)this.subscribtion.unsubscribe()
 }
}
