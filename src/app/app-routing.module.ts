import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from "./core/auth-guard.service";

import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { UserLoginComponent } from "./users/user-login/user-login.component";
import { SocialMediaComponent } from "./social-media/social-media.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // canActivate: [AuthGuardService]
  },
  {
    path: 'about',
    component: AboutComponent,
    // canActivate: [AuthGuardService]
  },
  {
    path: 'socialmedia',
    component: SocialMediaComponent
  },
  {
    path: 'login',
    component: UserLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule { }
