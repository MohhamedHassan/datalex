import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TapsComponent } from './components/taps/taps.component';
import { SliderGridComponent } from './components/slider-grid/slider-grid.component';
import { SocialMeediaComponent } from './components/social-meedia/social-meedia.component';
import { SectionHeaderComponent } from './components/section-header/section-header.component';



@NgModule({
  declarations: [
  
    TapsComponent,
       SliderGridComponent,
       SocialMeediaComponent,
       SectionHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CarouselModule
  ],
  exports: [
    CarouselModule,
    TapsComponent,
    SliderGridComponent,
    SocialMeediaComponent,
    SectionHeaderComponent
  ]
})
export class SharedModule { }
