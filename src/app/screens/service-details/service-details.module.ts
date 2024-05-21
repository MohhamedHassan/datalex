import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceDetailsRoutingModule } from './service-details-routing.module';
import { ServiceDetailsComponent } from './components/service-details/service-details.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ServiceDetailsComponent
  ],
  imports: [
    CommonModule,
    ServiceDetailsRoutingModule,
    SharedModule
  ]
})
export class ServiceDetailsModule { }
