import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AppRoutingModule, routedComponents } from './app-routing.module';

import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent, routedComponents],
  imports: [
    BrowserModule,
    CoreModule,
    NgbModule.forRoot(),
    HomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
