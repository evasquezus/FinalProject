import { HomepageComponent } from './components/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'item', component: ItemDetailComponent},
  { path: 'register', component: RegistrationComponent },
  { path: 'profile', component: ProfileComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
