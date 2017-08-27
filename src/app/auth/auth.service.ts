import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { firebase } from '../firebase';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthService {
  authenticated$: Observable<boolean>;
  uid$: Observable<string>;
  username$: Observable<string>;
  photoURL$: Observable<string>;
  email$: Observable<string>;

  constructor(public afAuth: AngularFireAuth) {
    this.authenticated$ = afAuth.authState.map(user => !!user);
    this.uid$ = afAuth.authState.map(user => user.uid);
    this.username$ = afAuth.authState.map(user => {
      if (user) {
        return user.displayName;
      }
    });
    this.photoURL$ = afAuth.authState.map(user => user.photoURL);
    this.email$ = afAuth.authState.map(user => user.email);
  }

  logout(): void {
    this.afAuth.auth.signOut();
  }
}
