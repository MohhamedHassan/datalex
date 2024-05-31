import { Component, ElementRef, Input, OnChanges, QueryList, ViewChildren } from '@angular/core';
import { MainContainerWithHeader } from '../../models/main-container-with-header';
import { Taps } from '../../models/taps';
import { MainSection } from '../../models/main-section';
import { Subscription, map, skipWhile } from 'rxjs';
import { GlopalService } from '../../services/glopal.service';

@Component({
  selector: 'app-shared-template',
  templateUrl: './shared-template.component.html',
  styleUrls: ['./shared-template.component.scss']
})
export class SharedTemplateComponent  implements OnChanges{
  pageData!:MainContainerWithHeader
  subscribtion!:Subscription
  taps!:Taps[]
  sections!:MainSection[]
  @Input() pageType:string=''
  constructor(private glopalService:GlopalService) {}
  
 ngOnChanges(): void {
  if(this.pageType) {
   let aboutData$ =  this.glopalService.pages.pipe(
      skipWhile(val=>val==null),
      map(res =>   res?.find(item => item?.title== this.pageType)),
    )
    this.subscribtion =  aboutData$.subscribe(
      (res:{main_section:MainContainerWithHeader;sections:MainSection[];navbars:{navbar_items_container:Taps[]}[]})=>{
        this.pageData=res?.main_section
        if(res?.navbars?.length) this.taps=res?.navbars[0]?.navbar_items_container
        if(res?.sections?.length) this.sections=res?.sections
      }
    )
  }
 }
 ngOnDestroy(): void {
   if(this.subscribtion)this.subscribtion.unsubscribe()
 }
}
