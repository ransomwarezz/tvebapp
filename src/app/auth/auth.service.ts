import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { firebase } from '../firebase';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  authenticated$: Observable<boolean>;
  user$: Observable<firebase.User>;  
  
  constructor(private afAuth: AngularFireAuth) {
    this.user$ = afAuth.authState;
    this.authenticated$ = afAuth.authState.map(user => !!user);
  }

  logout(): void {
    this.afAuth.auth.signOut();
  }
}
