import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AuthService } from '../auth';
import { firebase } from '../firebase';

import { IInvite } from './models';

@Injectable()
export class InvitesService {

  invites$: FirebaseListObservable<IInvite[]>;

  constructor(private db: AngularFireDatabase, private auth: AuthService) { 
    this.auth.uid$.subscribe(uid => {
      this.invites$ = this.db.list('invites/' + uid, { preserveSnapshot: true });
    });
  }

  createInvite(uidToInvite: string, invitedByUid: string) {
    console.log("push invites/" + uidToInvite);
    this.db.object('invites/' + uidToInvite).update(
      {
        challenger: invitedByUid,
        timestamp: firebase.database.ServerValue.TIMESTAMP
      }
    );
  }

  getInvites(uid: string): FirebaseListObservable<IInvite[]> {
    return this.db.list('invites/' + uid);
  }

}
