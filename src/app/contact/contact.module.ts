import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ContactRoutingModule, routedComponents } from './contact-routing.module';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  imports: [
    ContactRoutingModule,
    SharedModule,
    AgmCoreModule,
    NgbModule
  ],
  declarations: [routedComponents, ContactFormComponent]
})
export class ContactModule { }
