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
import { InputComponent } from './components/input/input.component';
import { ErrComponent } from './components/err/err.component';
import { FilterImagesPipe } from './pipes/filter-images.pipe';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
  
    TapsComponent,
       SliderGridComponent,
       SocialMeediaComponent,
       SectionHeaderComponent,
       LangPipe,
       SharedTemplateComponent,
       NotFoundComponent,
       InputComponent,
       ErrComponent,
       FilterImagesPipe,
       BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CarouselModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(), // ToastrModule added
    TranslateModule.forChild({
      defaultLanguage:'en',
      loader: {
        provide:TranslateLoader,
        useFactory:createTranslateLoader,
        deps:[HttpClient]
      }
    })
  ],
  exports: [
    InputComponent,
    CarouselModule,
    TapsComponent,
    SliderGridComponent,
    SocialMeediaComponent,
    SectionHeaderComponent,
    TranslateModule,
    SharedTemplateComponent,
    LangPipe,
    FilterImagesPipe,
    NotFoundComponent,
    ErrComponent,
    BreadcrumbComponent,
    ToastrModule
  ]
})
export class SharedModule { }
export function createTranslateLoader(http:HttpClient) {
  return new TranslateHttpLoader(http,'./assets/i18n/','.json')
}
