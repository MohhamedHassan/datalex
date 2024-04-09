import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Taps } from '../../models/taps';
import { MainSection } from '../../models/main-section';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-taps',
  templateUrl: './taps.component.html',
  styleUrls: ['./taps.component.scss']
})
export class TapsComponent implements OnChanges,AfterViewInit,OnDestroy {
  loading=false
  constructor(private activatedRoute:ActivatedRoute,private cd:ChangeDetectorRef) {}
  @Input() data!:Taps[]
  sub!:Subscription
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
  @ViewChildren('sectionRef') sectionRefs!: QueryList<ElementRef>;

   ngAfterViewInit(): void {
  this.sub=  this.activatedRoute.queryParams.subscribe(
      ({id}) => {
        const sectionToScrollTo = id;
    const sectionRef = this.sectionRefs.find(ref => ref.nativeElement.id == sectionToScrollTo);
    if (sectionRef) {
      this.loading=true
      this.cd.detectChanges()
        setTimeout(() => {
          sectionRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
          this.loading=false
          this.cd.detectChanges()
        }, 1000);
    }
      }
    )
   
   }
   ngOnDestroy(): void {
     if(this.sub)this.sub.unsubscribe()
   }
}
