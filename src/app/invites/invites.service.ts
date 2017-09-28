import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AuthService } from '../auth';
import { firebase } from '../firebase';

import { Invite, IInvite } from './models';

@Injectable()
export class InvitesService {

  invites$: FirebaseListObservable<IInvite[]>;

  constructor(private db: AngularFireDatabase, private auth: AuthService) { 
    this.invites$ = this.db.list('invites/' + this.auth.user.uid);
  }

  createInvite(uidToInvite: string) {
    console.log("createInvite for  " + uidToInvite);
    console.log("createInvite from " + this.auth.user.uid);
    this.db.object('invites/' + uidToInvite + '/' + this.auth.user.uid).update(
      {
        // invitedBy: this.uid,
        invitedBy: this.auth.user.uid,
        timestamp: firebase.database.ServerValue.TIMESTAMP
      }
    );
  }

  deleteInvite(uidToRemoveFrom: string) {
    return this.db.object('invites/' + uidToRemoveFrom + '/' + this.auth.user.uid).remove();
  }

  getInvites(): FirebaseListObservable<IInvite[]> {
    return this.db.list('invites/' + this.auth.user.uid);
  }

}
