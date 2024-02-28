import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TapsComponent } from './components/taps/taps.component';
import { SliderGridComponent } from './components/slider-grid/slider-grid.component';
import { SocialMeediaComponent } from './components/social-meedia/social-meedia.component';
import { SectionHeaderComponent } from './components/section-header/section-header.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LangPipe } from './pipes/lang.pipe';
import { SharedTemplateComponent } from './components/shared-template/shared-template.component';
import { NotFoundComponent } from './components/not-found/not-found.component';



@NgModule({
  declarations: [
  
    TapsComponent,
       SliderGridComponent,
       SocialMeediaComponent,
       SectionHeaderComponent,
       LangPipe,
       SharedTemplateComponent,
       NotFoundComponent
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
    SectionHeaderComponent,
    TranslateModule,
    SharedTemplateComponent,
    LangPipe,
    NotFoundComponent
  ]
})
export class SharedModule { }

