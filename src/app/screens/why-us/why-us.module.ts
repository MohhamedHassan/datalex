import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhyUsRoutingModule } from './why-us-routing.module';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    WhyUsComponent
  ],
  imports: [
    CommonModule,
    WhyUsRoutingModule,
    SharedModule
  ]
})
export class WhyUsModule { }
