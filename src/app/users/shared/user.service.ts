import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { User } from './user';

@Injectable()
export class UserService {

  user: User;

  constructor(private afDatabase: AngularFireDatabase) { }

  getUserProfile(uid: string): FirebaseObjectObservable<User> {
    let userRef$ = this.afDatabase.object('users/' + uid);
    userRef$.map(function(res) {
      let tvebappUser: User = new User();
      tvebappUser.uid = res.uid;
      tvebappUser.nickname = res.nickname;
      tvebappUser.photoUrl = res.photoUrl;
      return tvebappUser;
    });
    return null;
  }
}
