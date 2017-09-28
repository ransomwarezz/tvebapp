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
          // this.players$ = this.db.list('players/'); // return only online users
          this.players$ = this.db.list('players/', { query: { orderByChild: 'status', equalTo: 'online' } }); // return only online users
          
        });
    }
  }

  getPlayer(uid: string): FirebaseObjectObservable<IPlayer> {
    return this.db.object('players/' + uid);
  }

}
