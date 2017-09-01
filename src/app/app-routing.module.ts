import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { UserProfileComponent } from "./users/user-profile/user-profile.component";
import { PresenceComponent } from "./presence";

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
    path: 'presence',
    component: PresenceComponent
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
