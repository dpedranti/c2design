import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { HomeComponent } from './home/home.component';
// import { OurWorkComponent } from './our-work/our-work.component';
// import { ServicesComponent } from './services/services.component';
// import { BlogComponent } from './blog/blog.component';
// import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

/* Feature Modules */
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    // OurWorkComponent,
    // ServicesComponent,
    // BlogComponent,
    // ContactComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBF1inD8C1JSEbDnj-GgWbBlwkgHCeOlCg'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
