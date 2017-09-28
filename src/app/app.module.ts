import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AuthMethods, AuthProvider, FirebaseUIAuthConfig, FirebaseUIModule, AuthProviderWithCustomConfig } from 'firebaseui-angular';
import { FlexLayoutModule } from '@angular/flex-layout';

// components
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

// environments
import { environment } from '../environments/environment';

// modules
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth';
import { GamesModule } from './games';
import { InvitesModule } from './invites';
import { PlayersModule } from './players';
import { FirebaseModule } from './firebase';
import { MaterialModule } from './material';

import 'hammerjs';

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
      // auth_type: 'reauthenticate'
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
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    AuthModule,
    BrowserModule,
    BrowserAnimationsModule,
    FirebaseModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    FlexLayoutModule,
    FormsModule,
    GamesModule,
    HttpModule,
    InvitesModule,
    MaterialModule,
    PlayersModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
