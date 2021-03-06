import { NavbarComponent } from './components/navbar/navbar.component';
import { ItemsSellingComponent } from './components/items-selling/items-selling.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CompletedComponent } from './components/completed/completed.component';
import { LoginComponent } from './components/login/login.component';
import { DummyComponent } from './components/dummy/dummy.component';
import { ItemsWonComponent } from './components/items-won/items-won.component';
import { ItemsImBiddingOnComponent } from './components/items-im-bidding-on/items-im-bidding-on.component';
import { Dummy2Component } from './components/dummy2/dummy2.component';



const routes: Routes = [
  { path: 'completed', component: CompletedComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'item', component: ItemDetailComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'listitem', component: ListItemComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dummy', component: DummyComponent},
  { path: 'dummy2', component: Dummy2Component},
  { path: 'itemsWon', component: ItemsWonComponent },
  { path: 'selling', component: ItemsSellingComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: '', component: HomepageComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
