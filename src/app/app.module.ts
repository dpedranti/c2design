import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AppRoutingModule, routedComponents } from './app-routing.module';

import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    routedComponents
  ],
  imports: [
    BrowserModule,
    CoreModule,
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBF1inD8C1JSEbDnj-GgWbBlwkgHCeOlCg'
    }),
    HomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
