import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { ContactRoutingModule, routedComponents } from './contact-routing.module';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  imports: [
    ContactRoutingModule,
    CommonModule,
    FormsModule,
    AgmCoreModule
  ],
  declarations: [routedComponents, ContactFormComponent]
})
export class ContactModule { }
