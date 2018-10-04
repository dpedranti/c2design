import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
  {
    path: 'our-work',
    loadChildren: 'app/our-work/our-work.module#OurWorkModule'
  },
  {
    path: 'services',
    loadChildren: 'app/services/services.module#ServicesModule'
  },
  { path: 'blog', loadChildren: 'app/blog/blog.module#BlogModule' },
  { path: 'contact', loadChildren: 'app/contact/contact.module#ContactModule' },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const routedComponents = [PageNotFoundComponent];
