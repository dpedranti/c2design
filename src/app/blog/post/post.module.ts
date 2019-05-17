import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

import { PostRoutingModule, routedComponents } from './post-routing.module';

@NgModule({
  imports: [PostRoutingModule, MarkdownModule.forRoot()],
  declarations: [routedComponents]
})
export class PostModule {}
