import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable()

export class PresenceService {
  private presenceRef: FirebaseObjectObservable<any>;
  currentUser: firebase.User;

  constructor(private afDatabase: AngularFireDatabase) { }

  connect(user: firebase.User) {
    this.currentUser = user;
    /*
     * Get reference for onlineUsers and add the current user to the list
     * and set the status to available.
     */
    this.presenceRef = this.afDatabase.object('onlineUsers/' + user.uid);

    /*
     * Install onDisconnect handler, it will be executed on the firebase server
     * side when the client disconnects.
     * We remove the entry for the current user from the onlineUsers list.
     */
    this.presenceRef.$ref.onDisconnect().remove((error) => {
      if (error != null) {
        // error case
        console.log("error occurred in remove on disconnect: " + error);
      }
    });

    /* Set status to available */
    this.presenceRef.set("available"); // TODO allow do not disturb

  }

  // return an FirebaseListObservable with all users online
  get users(): FirebaseListObservable<any[]> {
    return this.afDatabase.list('onlineUsers');
  }
}
