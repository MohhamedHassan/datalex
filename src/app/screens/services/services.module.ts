import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './components/services/services.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ServicesComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    SharedModule
  ]
})
export class ServicesModule { }
