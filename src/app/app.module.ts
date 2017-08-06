import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AuthService } from './core/auth.service';
import { AuthGuardService } from './core/auth-guard.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthMethods, AuthProvider, FirebaseUIAuthConfig, FirebaseUIModule, AuthProviderWithCustomConfig } from 'firebaseui-angular';

import { environment } from '../environments/environment';

import { MdButtonModule, MdCardModule, MdCheckboxModule, MdListModule, MdSidenavModule, MdToolbarModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AboutComponent } from './about/about.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { AppRoutingModule } from './app-routing.module';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { HomeComponent } from './home/home.component';

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
    SocialMediaComponent,
    UserLoginComponent,
    UserProfileComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdCardModule,
    MdCheckboxModule,
    MdListModule,
    MdSidenavModule,
    MdToolbarModule,
    AppRoutingModule,
    FlexLayoutModule,
  ],
  providers: [
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
