import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

  private user$: Observable<firebase.User>;
  
  constructor(public afAuth: AngularFireAuth, private router: Router) {
    this.user$ = afAuth.authState;
  }

  // return true if user is logged in
  get authenticated(): boolean {
    console.log("User is" + (this.user$ !== null ? "" : " not") + " logged in" );
    return this.user$ !== null;
  }

  // return current user
  get currentUser(): any {
    return this.authenticated ? this.user$ : null;
  }
}
