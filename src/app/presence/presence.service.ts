import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

import { AuthService } from "../auth";

@Injectable()
export class PresenceService {

  uid: string;
  presentUsers$: FirebaseListObservable<any[]>;

  constructor(private authService: AuthService, private db: AngularFireDatabase) { 
    this.authService.uid$.subscribe(uid => {
      if (uid) {
        console.log("PresenceService.constructor(): uid = " + uid);
        this.uid = uid;
        this.updateOnConnect();
      }
    });
  }

  private updateOnConnect() {
    console.log("PresenceService.updateOnConnect()");
    this.db.object('.info/connected').subscribe(connected => {
      let status = connected.$value ? 'online' : 'offline';
      this.updateStatus(status);
      this.presentUsers$ = this.db.list('presentusers');
    })
  }

  private updateStatus(status: string) {
    if (!this.uid)
      return;
    console.log("PresenceService.updateStatus(): updating user status to " + status);
    let userRef$: FirebaseObjectObservable<any> = this.db.object('presentusers/' + this.uid);
    /*
     * Install onDisconnect handler, it will be executed on the firebase server
     * side when the client disconnects.
     * We remove the entry for the current user from the onlineUsers list.
     */
    console.log("installing onDisconnect");
    userRef$.$ref.onDisconnect().remove((error) => {
      if (error) {
        // error case
        console.log("error occurred in remove on disconnect: " + error);
      }
    });
    userRef$.update({status: status});
  }

  get  currentUser() {
    return this.uid;
  }
}
