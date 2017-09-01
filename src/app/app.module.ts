import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { UserService } from './users/shared/user.service';

import { AuthMethods, AuthProvider, FirebaseUIAuthConfig, FirebaseUIModule, AuthProviderWithCustomConfig } from 'firebaseui-angular';

import { environment } from '../environments/environment';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { HomeComponent } from './home/home.component';
import { UserPresenceComponent } from './users/user-presence/user-presence.component';


import { AuthModule } from './auth';
import { PresenceModule } from './presence';
import { FirebaseModule } from './firebase';
import { MaterialModule } from './material';


const facebookCustomConfig: AuthProviderWithCustomConfig = {
  provider: AuthProvider.Facebook,
  customConfig: {
    scopes: [
      'public_profile',
      'email',
      'user_likes',
      'user_friends'
    ],
    customParameters: {
      // Forces password re-entry.
      auth_type: 'reauthenticate'
    }
  }
};

export const firebaseUiAuthConfig: FirebaseUIAuthConfig = {
  providers: [
    AuthProvider.Google,
    facebookCustomConfig,
    // AuthProvider.Twitter,
    // AuthProvider.Github,
    AuthProvider.Password,
    // AuthProvider.Phone
  ],
  method: AuthMethods.Popup,
  tos: '<your-tos-link>'
};

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    UserProfileComponent,
    HomeComponent,
    UserPresenceComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    AuthModule,
    FirebaseModule,
    MaterialModule,
    PresenceModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    FormsModule,
    HttpModule,
    AppRoutingModule,
    FlexLayoutModule,
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
