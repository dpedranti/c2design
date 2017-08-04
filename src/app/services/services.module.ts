import { NgModule } from '@angular/core';

import { ServicesRoutingModule, routedComponents } from './services-routing.module';

@NgModule({
  imports: [ServicesRoutingModule],
  declarations: [routedComponents]
})
export class ServicesModule { }
