import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatePipe, CurrencyPipe } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LandingComponent } from './components/landing/landing.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HomepageComponent,
    ItemDetailComponent,
    RegistrationComponent,
    NavbarComponent,
    ProfileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [,
  DatePipe,
  CurrencyPipe ],
bootstrap: [AppComponent]
})
export class AppModule { }
