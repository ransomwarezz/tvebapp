import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../auth';
import { IPlayer, Player } from './models';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { firebase } from '../firebase';

@Injectable()
export class PlayersService {

  user: firebase.User;
  visiablePlayers$: Observable<IPlayer[]>;
  players$: FirebaseListObservable<IPlayer[]>;

  constructor(private db: AngularFireDatabase, private auth: AuthService) { 
    auth.user$
    .take(1)
    .subscribe(user => {
      console.log("PlayersService");
      const path = "users/"; // TODO change back to "players"
      this.players$ = db.list(path);
      this.visiablePlayers$ = this.players$;
      this.user = user;
    });
  }
}
