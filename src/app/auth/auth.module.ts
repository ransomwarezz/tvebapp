import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { LoginComponent } from './components/login/login.component';

// modules
import { AuthRoutesModule } from './auth.routes';
import { FirebaseUIModule } from 'firebaseui-angular';
// services
import { AuthGuard } from './guards/auth.guard';
import { UnAuthGuard } from './guards/un-auth.guard';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutesModule,
    FirebaseUIModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    UnAuthGuard
  ]
})
export class AuthModule { }