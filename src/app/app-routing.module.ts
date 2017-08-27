import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { UserProfileComponent } from "./users/user-profile/user-profile.component";
import { UserPresenceComponent } from "./users/user-presence/user-presence.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'users',
    component: UserPresenceComponent
  },
  {
    path: 'profile',
    component: UserProfileComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule { }
