import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from "./about/about.component";
import { LoginComponent } from "./login/login.component";
import { SocialMediaComponent } from "./social-media/social-media.component";

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'socialmedia',
    component: SocialMediaComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule { }
