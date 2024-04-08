import { AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';
import { Taps } from '../../models/taps';
import { MainSection } from '../../models/main-section';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-taps',
  templateUrl: './taps.component.html',
  styleUrls: ['./taps.component.scss']
})
export class TapsComponent implements OnChanges {
  @Input() data!:Taps[]
  customOptions: OwlOptions = {
    loop: true,
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
      }
    },
    nav: false,
    rtl:localStorage.getItem('lang')=='ar' ? true : false
  }
 // selectedItem:Taps|undefined
//  selectedSubItem:MainSection|undefined
  ngOnChanges(): void {
    if(this.data?.length) {
      console.log(this.data)
    //  this.selectedItem=this.data[0]
     // if(this.data[0]?.navbar_items?.length) this.selectedSubItem=this.data[0]?.navbar_items[0]
    }
  }
}
