import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Resources } from 'src/app/screens/models/resources';

@Component({
  selector: 'app-slider-grid',
  templateUrl: './slider-grid.component.html',
  styleUrls: ['./slider-grid.component.scss']
})
export class SliderGridComponent {
  @Input() data:Resources[]=[]
  @Input() title:string=''
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
