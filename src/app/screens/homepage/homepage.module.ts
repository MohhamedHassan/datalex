import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './component/homepage/homepage.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ImagesComponent } from './component/images/images.component';
import { SliderComponent } from './component/slider/slider.component';
import { WhatWeDoComponent } from './component/what-we-do/what-we-do.component';


@NgModule({
  declarations: [
    HomepageComponent,
    ImagesComponent,
    SliderComponent,
    WhatWeDoComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    SharedModule
  ]
})
export class HomepageModule { }
