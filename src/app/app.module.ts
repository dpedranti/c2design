import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { ToastrModule } from './toastr/toastr.module';
import { HomeModule } from './home/home.module';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { environment } from '../environments/environment.prod';

@NgModule({
  declarations: [AppComponent, routedComponents],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    CoreModule,
    ToastrModule,
    HomeModule,
    AppRoutingModule
  ],
  providers: [{ provide: 'CONTACT_API', useValue: environment.contactApi }],
  bootstrap: [AppComponent]
})
export class AppModule {}
