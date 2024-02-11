import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

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
        path: 'services',
        loadChildren:() => import('src/app/screens/services/services.module').then(m => m.ServicesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
