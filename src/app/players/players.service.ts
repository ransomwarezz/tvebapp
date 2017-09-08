import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { IPlayer, Player } from './models';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

import { AuthService } from '../auth';

@Injectable()
export class PlayersService {

  currentPlayer$: FirebaseObjectObservable<IPlayer>;
  players$: FirebaseListObservable<IPlayer[]>;

  constructor(private db: AngularFireDatabase, private auth: AuthService) { 
    this.getOnlinePlayers();
    this.createPlayer(this.auth.user.uid);
  }

  private getOnlinePlayers() {
    this.players$ = this.db.list('users/', { query: { orderByChild: 'status', equalTo: 'online' } }); // return only online users
  }

  private createPlayer(uid: string) {
    this.currentPlayer$ = this.db.object('players/' + this.auth.user.uid);
    this.currentPlayer$.update(
      {
        // name: this.auth.user.displayName,
        name: 'nickname',
        photoURL: this.auth.user.photoURL,
        status: 'available'
      }
    );
  }
}
