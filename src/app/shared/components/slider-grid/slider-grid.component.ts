import { Component, ElementRef, HostListener, Input, QueryList, ViewChildren } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MainContainerWithHeader } from '../../models/main-container-with-header';

@Component({
  selector: 'app-slider-grid',
  templateUrl: './slider-grid.component.html',
  styleUrls: ['./slider-grid.component.scss']
})
export class SliderGridComponent  {
  @ViewChildren('owlItem') owlItems!: QueryList<ElementRef>;
  @Input() data!:MainContainerWithHeader
  @Input() type=0
  @Input() seeall=false
  customOptions: OwlOptions = {
    skip_validateItems: true,
    loop: false,
    autoplay:false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      },
    },
    margin:30,
    nav: false,
    rtl:localStorage.getItem('lang')=='ar' ? true : false
  }
  
  


}
