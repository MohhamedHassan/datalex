import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogDetailsRoutingModule } from './blog-details-routing.module';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BlogDetailsComponent
  ],
  imports: [
    CommonModule,
    BlogDetailsRoutingModule,
    SharedModule
  ]
})
export class BlogDetailsModule { }
