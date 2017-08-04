import { NgModule } from '@angular/core';

import { BlogRoutingModule, routedComponents } from './blog-routing.module';

@NgModule({
  imports: [BlogRoutingModule],
  declarations: [routedComponents]
})
export class BlogModule { }
