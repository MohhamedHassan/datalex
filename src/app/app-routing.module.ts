import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { ErrComponent } from './shared/components/err/err.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('src/app/screens/layout/layout.module').then(m => m.LayoutModule),
  },
  {
    path: 'notfound',
    component:ErrComponent
  },
  // {
  //   path: 'auth',
  //   loadChildren: () => import('src/app/screens/auth/auth.module').then(m => m.AuthModule)
  // },
  {
    path:'**',
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
