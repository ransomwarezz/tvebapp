import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { firebase } from '../firebase';
import { FirebaseUISignInSuccess } from 'firebaseui-angular';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  authenticated$: Observable<boolean>;
  user$: Observable<firebase.User>;
  user: firebase.User;
  uid$: Observable<string>;

  userSubscription: Subscription;
  playerSubscription: Subscription;

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) {
    console.log("(AuthService:constructor)");
    this.user$ = afAuth.authState;
    this.authenticated$ = afAuth.authState.map(user => !!user);
    this.uid$ = afAuth.authState.map(user => {if (user) return user.uid});
    this.userSubscription = this.user$
      .do(user => {
        if (user) {
          this.user = user;
          this.updatePlayer();
          this.updateUser();
          this.updateOnConnect();
        }
      })
      .subscribe();
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log("onAuthStateChanged: \"" + user.displayName + "\" \"" + user.email + "\"");
      } else {
        console.log("onAuthStateChanged: no user");
      }
    })
  }

  private updatePlayer() {
    console.log("(AuthService:updatePlayer)");
    firebase.database().ref().child(`players/${this.user.uid}`).onDisconnect().update({status: 'offline'});
    let player = this.db.object('players/' + this.user.uid, { preserveSnapshot: true });
    this.playerSubscription = player.subscribe(snapshot => {
      if (snapshot.$exists) {
        //object exists 
        console.log("player already exists");
      } else {
        //object doesn't exist 
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
    console.log("(AuthService:logout)");
    if (this.userSubscription)
      this.userSubscription.unsubscribe();
    if (this.playerSubscription)
    this.playerSubscription.unsubscribe();
    this.updateStatus('offline');
    this.afAuth.auth.signOut();
  }

  private updateUser() {
    console.log("(AuthService:updateUser)");
    return this.db.object('users/' + this.user.uid).update({
      name: this.user.displayName,
      photoURL: this.user.photoURL,
      email: this.user.email
    })
  }

  private updateStatus(status: string) {
    console.log("(AuthService:updateStatus)");
    if (this.user) {
      return this.db.object('players/' + this.user.uid).update({ status: status });
    }
  }

  private updateOnConnect() {
    console.log("(AuthService:updateOnConnect)");
    return this.db.object('.info/connected')
      .do(connected => {
        let status = connected.$value ? 'online' : 'offline';
        this.updateStatus(status);
      })
      .subscribe();
  }

}
