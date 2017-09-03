import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { firebase } from "../../firebase";
import { User } from './user';

@Injectable()
export class UserService {

  constructor(private afDatabase: AngularFireDatabase) { }

  /* add user to the database if not already exists */
  registerUser(user: firebase.User) {
    let userRef$ = this.afDatabase.object('users/' + user.uid);
    userRef$.subscribe(data => {
      if (data.$exists()) {
        console.log("user already exists");
        userRef$.update({status: "online"})
      } else {
        console.log("user does not yet exist ... register new user");
        userRef$.set(
          {
            name: user.displayName,
            photoURL: user.photoURL,
            status: "online"
          }
        );
      }
    })
  }

  getOnlineUsers(): FirebaseListObservable<any> {
    return this.afDatabase.list('users/', { query: { orderByChild: 'status', equalTo: 'online' } });
  }

  getUser(uid: string): FirebaseObjectObservable<any> {
    console.log("getUser for uid " + uid);
    return this.afDatabase.object('users/' + uid);
  }
  
}
