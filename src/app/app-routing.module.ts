import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { UserLoginComponent } from "./users/user-login/user-login.component";
import { UserProfileComponent } from "./users/user-profile/user-profile.component";
import { UserPresenceComponent } from "./users/user-presence/user-presence.component";
import { SocialMediaComponent } from "./social-media/social-media.component";

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
    path: 'socialmedia',
    component: SocialMediaComponent
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
