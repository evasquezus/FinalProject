import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatePipe, CurrencyPipe } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingComponent } from './components/landing/landing.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ListItemComponent } from './components/list-item/list-item.component';
import { CompletedComponent } from './components/completed/completed.component';
import { LoginComponent } from './components/login/login.component';
import { NgbdModalConfigComponent } from './components/ngbd-modal-config/ngbd-modal-config.component';
import { NgbdCarouselBasicComponent } from './components/ngbd-carousel-basic/ngbd-carousel-basic.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgbdRatingBasicComponent } from './components/ngbd-rating-basic/ngbd-rating-basic.component';
import { NgbdAlertCloseableComponent } from './components/ngbd-alert-closeable/ngbd-alert-closeable.component';
import { NgbdAlertSelfclosingComponent } from './components/ngbd-alert-selfclosing/ngbd-alert-selfclosing.component';
import { DummyComponent } from './components/dummy/dummy.component';
import { ItemsWonComponent } from './components/items-won/items-won.component';
import { ItemsImBiddingOnComponent } from './components/items-im-bidding-on/items-im-bidding-on.component';
import { ItemsSellingComponent } from './components/items-selling/items-selling.component';
import { Dummy2Component } from './components/dummy2/dummy2.component';




@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HomepageComponent,
    ItemDetailComponent,
    RegistrationComponent,
    NavbarComponent,
    ProfileComponent,
    ListItemComponent,
    CompletedComponent,
    LoginComponent,
    NgbdModalConfigComponent,
    NgbdCarouselBasicComponent,
    NgbdRatingBasicComponent,
    NgbdAlertCloseableComponent,
    NgbdAlertSelfclosingComponent,
    DummyComponent,
    ItemsWonComponent,
    ItemsImBiddingOnComponent,
    ItemsSellingComponent,
    Dummy2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [
  DatePipe,
  CurrencyPipe],
bootstrap: [AppComponent],

})
export class AppModule { }
