import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {
  OurWorkRoutingModule,
  routedComponents
} from './our-work-routing.module';

import { VideoJSComponent } from './videojs.component';

@NgModule({
  imports: [OurWorkRoutingModule, CommonModule, NgbModule],
  declarations: [routedComponents, VideoJSComponent]
})
export class OurWorkModule {}
