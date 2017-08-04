import { NgModule } from '@angular/core';

import { HomeRoutingModule, routedComponents } from './home-routing.module';

@NgModule({
  imports: [HomeRoutingModule],
  declarations: [routedComponents]
})
export class HomeModule { }
