import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { SwfComponent } from './swf.component';

import {
  OurWorkRoutingModule,
  routedComponents
} from './our-work-routing.module';

@NgModule({
  imports: [OurWorkRoutingModule, SharedModule, CommonModule, NgbModule],
  declarations: [routedComponents, SwfComponent]
})
export class OurWorkModule {}
