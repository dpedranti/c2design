import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {
  ContactRoutingModule,
  routedComponents
} from './contact-routing.module';

@NgModule({
  imports: [ContactRoutingModule, SharedModule, NgbModule],
  declarations: [routedComponents]
})
export class ContactModule {}
