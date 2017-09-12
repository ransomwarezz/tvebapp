import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AuthService } from '../auth';
import { firebase } from '../firebase';

import { Invite, IInvite } from './models';

@Injectable()
export class InvitesService {

  invites$: FirebaseListObservable<IInvite[]>;

  private uid: string;

  constructor(private db: AngularFireDatabase, private auth: AuthService) { 
    this.auth.uid$.subscribe(uid => {
      this.uid = uid;
      this.invites$ = this.db.list('invites/' + this.uid);
    });
  }

  createInvite(uidToInvite: string) {
    console.log("createInvite for" + uidToInvite);
    this.db.object('invites/' + uidToInvite + '/' + this.uid).update(
      {
        challenger: this.uid,
        timestamp: firebase.database.ServerValue.TIMESTAMP
      }
    );
  }

  deleteInvite(uidToRemoveFrom: string) {
    return this.db.object('invites/' + uidToRemoveFrom + '/' + this.uid).remove();
  }

  getInvites(): FirebaseListObservable<IInvite[]> {
    return this.db.list('invites/' + this.uid);
  }

}
