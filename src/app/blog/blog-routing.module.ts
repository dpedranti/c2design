import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog.component';

const routes: Routes = [
  { path: '', component: BlogComponent },
  { path: 'post', loadChildren: 'app/blog/post/post.module#PostModule' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {}

export const routedComponents = [BlogComponent];
