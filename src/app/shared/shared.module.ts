import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TapsComponent } from './components/taps/taps.component';



@NgModule({
  declarations: [
  
    TapsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CarouselModule
  ],
  exports: [
    CarouselModule,
    TapsComponent
  ]
})
export class SharedModule { }
