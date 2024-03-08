import { Component } from '@angular/core';
import { Subscription, map, skipWhile } from 'rxjs';
import { Resources } from 'src/app/screens/models/resources';
import { Slider } from 'src/app/screens/models/slider';
import { WhatWeDo } from 'src/app/screens/models/what-we-do';
import { MainContainerWithHeader } from 'src/app/shared/models/main-container-with-header';
import { MainSection } from 'src/app/shared/models/main-section';
import { Taps } from 'src/app/shared/models/taps';
import { GlopalService } from 'src/app/shared/services/glopal.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  upperSlider!:MainSection[]
  driver!:MainSection[]
  valueProposition!:MainContainerWithHeader
  images!:MainContainerWithHeader
  subscribtion!:Subscription
  nlpTools!:MainSection[]
  resources!:MainContainerWithHeader
  whatwedo!:MainContainerWithHeader
  taps!:Taps[]
  constructor(private glopalService:GlopalService) {}
 ngOnInit(): void {
   let aboutData$ =  this.glopalService.pages.pipe(
      skipWhile(val=>val==null),
      map(res =>   res?.find(item => item?.title== "Home")),
    )
    this.subscribtion =  aboutData$.subscribe(
      (res:{main_section:any,sections:any[],navbars:{navbar_items_container:any}[]})=>{
        this.upperSlider=res?.main_section.sections
        if(res.sections?.length) {
          let sections:MainContainerWithHeader[] = res.sections
          // 
          this.driver = sections.find(item=>item.title=='Home Section 1')?.sections || []
          // 
          let ValueProposition = sections.find(item=>item?.title=='Home Section 2 - Value Proposition')
          if(ValueProposition) this.valueProposition =  ValueProposition
          // 
          let images = sections.find(item=>item?.title=='Home section 6')
          if(images) this.images =  images
          // 
          this.nlpTools = sections.find(item=>item?.title == "Home Section 3")?.sections || []
          // 
          let resources = sections.find(item=>item?.title=='Home Section 4 - Resources')
          if(resources) this.resources =  resources
          //
          let whatwedo = sections.find(item=>item?.title=='Home Section 5 - What We Do?')
          if(whatwedo) this.whatwedo =  whatwedo
          // 
         
          
        }
        if(res?.navbars?.length) this.taps = res?.navbars[0]?.navbar_items_container
      }
    )
 }
 ngOnDestroy(): void {
   if(this.subscribtion)this.subscribtion.unsubscribe()
 }






}

