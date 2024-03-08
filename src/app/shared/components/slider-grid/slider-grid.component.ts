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
  
  imageLoadingDone(index:number) {
    this.data.sections[index].load=true
    let allImagesLoad = true
    if(this.data?.sections?.length) {
      this.data?.sections.forEach(item => {
         if(!item.load) allImagesLoad=false
      })
      if(allImagesLoad) {
        this.setEqualHeight()
        
      }
    }

  }
  setEqualHeight(): void {
    let maxHeight = 0;
    this.owlItems.forEach(item => {
      const height = item.nativeElement.offsetHeight;
      maxHeight = height > maxHeight ? height : maxHeight;
    });
    this.owlItems.forEach(item => {
      item.nativeElement.style.height = maxHeight + 'px';
    });
  }
  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    setTimeout(() => {
      this.setEqualHeight();
     }, 0);
  }

}
