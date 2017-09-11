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
  uid$: Observable<string>;

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) {
    this.user$ = afAuth.authState;
    this.authenticated$ = afAuth.authState.map(user => !!user);
    this.uid$ = afAuth.authState.map(user => {if (user) return user.uid});
    this.user$
      .do(user => {
        if (user) {
          this.user = user;
          this.updatePlayer();
          this.updateUser();
          this.updateOnConnect();
        }
      })
      .subscribe();
  }

  private updatePlayer() {
    let player = this.db.object('players/' + this.user.uid, { preserveSnapshot: true });
    player.subscribe(snapshot => {
      if (snapshot.$exists) {
        //object exists 
        console.log("player already exists");
      } else {
        //object doesnt exist 
        console.log("player does not exist");
        this.db.object('players/' + this.user.uid).update(
          {
            uid: this.user.uid,
            name: this.user.displayName,
            photoURL: this.user.photoURL,
            league: 'Amateur'
          }
        )
      }
    });

  }


  logout(): void {
    this.updateStatus('offline');
    this.afAuth.auth.signOut();
  }

  private updateUser() {
    return this.db.object('users/' + this.user.uid).update({
      name: this.user.displayName,
      photoURL: this.user.photoURL
    })
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

}
