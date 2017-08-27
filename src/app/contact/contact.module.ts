import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { ContactRoutingModule, routedComponents } from './contact-routing.module';

@NgModule({
  imports: [ContactRoutingModule, AgmCoreModule],
  declarations: [routedComponents]
})
export class ContactModule { }
