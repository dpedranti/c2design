import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {
  ServicesRoutingModule,
  routedComponents
} from './services-routing.module';

@NgModule({
  imports: [ServicesRoutingModule, NgbModule],
  declarations: [routedComponents]
})
export class ServicesModule {}
