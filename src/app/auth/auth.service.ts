import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { firebase } from '../firebase';
import { FirebaseUISignInSuccess } from 'firebaseui-angular';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  authenticated$: Observable<boolean>;
  user$: Observable<firebase.User>;
  user: firebase.User;

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) {
    this.user$ = afAuth.authState;
    this.authenticated$ = afAuth.authState.map(user => !!user);
    this.user$
      .do(user => {
        if (user) {
          this.user = user;
          this.updateOnConnect();
          this.updateOnDisconnect();
        }
      })
      .subscribe();
  }

  logout(): void {
    this.updateStatus('offline');
    this.afAuth.auth.signOut();
  }

  private updateStatus(status: string) {
    if (this.user) {
      return this.db.object('users/' + this.user.uid).update({ status: status });
    }
  }

  private updateOnConnect() {
    return this.db.object('.info/connected')
      .do(connected => {
        let status = connected.$value ? 'online' : 'offline';
        this.updateStatus(status);
      })
      .subscribe();
  }

  private updateOnDisconnect() {
    firebase.database().ref().child(`users/${this.user.uid}`)
      .onDisconnect()
      .update({ status: 'offline' })
  }

}
