import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { firebase } from "../firebase";

import { AuthService } from '../auth';
import { IPlayer, Player } from './models';

@Injectable()
export class PlayersService {

  currentPlayer$: FirebaseObjectObservable<IPlayer>;

  players$: FirebaseListObservable<IPlayer[]>;

  constructor(private db: AngularFireDatabase, private auth: AuthService) {
    if (this.auth.uid$) {
      this.auth.uid$
        .take(1)
        .subscribe(uid => {
          this.currentPlayer$ = this.db.object('players/' + uid);
          this.players$ = this.db.list('players/'); // return only online users
        });
    }
  }

  public invitePlayer(uid: string, uidToInvite: string) {
    console.log("uid         = " + uid);
    console.log("uidToInvite = " + uidToInvite);
    this.db.object('invites/' + uidToInvite + '/' + uid).update(
      {
        challenger: uid,
        timestamp: firebase.database.ServerValue.TIMESTAMP
      }
    );
  }

}
