import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { NotFoundComponent } from 'src/app/shared/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch:'full',
        loadChildren:() => import('src/app/screens/homepage/homepage.module').then(m => m.HomepageModule)
      },
      {
        path: 'blog-details/:id',
        loadChildren:() => import('src/app/screens/blog-details/blog-details.module').then(m => m.BlogDetailsModule)
      },
      {
        path: 'about-us',
        loadChildren:() => import('src/app/screens/about-us/about-us.module').then(m => m.AboutUsModule)
      },
      {
        path: 'why-us',
        loadChildren:() => import('src/app/screens/why-us/why-us.module').then(m => m.WhyUsModule)
      },
      {
        path: 'services',
        loadChildren:() => import('src/app/screens/services/services.module').then(m => m.ServicesModule)
      },
      {
        path: 'products',
        loadChildren:() => import('src/app/screens/products/products.module').then(m => m.ProductsModule)
      },
      {
        path: 'blogs',
        loadChildren:() => import('src/app/screens/blogs/blogs.module').then(m => m.BlogsModule)
      },
      {
        path: 'jobs',
        loadChildren:() => import('src/app/screens/jobs/jobs.module').then(m => m.JobsModule)
      },
      {
        path: 'contact-us',
        loadChildren:() => import('src/app/screens/contact-us/contact-us.module').then(m => m.ContactUsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
