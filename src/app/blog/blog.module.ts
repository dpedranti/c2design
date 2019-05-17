import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

import { BlogRoutingModule, routedComponents } from './blog-routing.module';

@NgModule({
  imports: [BlogRoutingModule, MarkdownModule.forRoot()],
  declarations: [routedComponents]
})
export class BlogModule {}
