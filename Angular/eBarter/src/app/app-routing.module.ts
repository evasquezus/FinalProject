import { ListItemComponent } from './components/list-item/list-item.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CompletedComponent } from './components/completed/completed.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'completed', component: CompletedComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'item', component: ItemDetailComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'listitem', component: ListItemComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomepageComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
