import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthMethods, AuthProvider, FirebaseUIAuthConfig, FirebaseUIModule, AuthProviderWithCustomConfig } from 'firebaseui-angular';
import { FirebaseUISignInSuccess } from 'firebaseui-angular';

import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private auth: AuthService, private router: Router) { }

  successCallback(data: FirebaseUISignInSuccess) {
    console.log("LoginComponent:successCallback: user logged in now -> redirecting to home");
    // this.router.navigate(['']);
  }

}
