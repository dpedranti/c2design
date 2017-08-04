import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule, routedComponents } from './contact-routing.module';

@NgModule({
  imports: [ContactRoutingModule],
  declarations: [routedComponents]
})
export class ContactModule { }
