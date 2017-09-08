import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

// import { AuthService } from "../../core/auth.service";
import { AuthService } from "../../auth";
import * as firebase from 'firebase/app';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user$: Observable<firebase.User>;
  // users$: FirebaseListObservable<any[]>;
  // onlineRef$: FirebaseObjectObservable<any>;
  connectedRef: FirebaseObjectObservable<any>;

  constructor(public authService: AuthService, private db: AngularFireDatabase) {
    this.user$ = authService.user$;
    this.connectedRef = db.object('.info');
    this.connectedRef.map(info => info.connected).subscribe(value => console.log(`connected = ${value}`));

    // authService.uid$
    //   .take(1)
    //   .subscribe(uid => {
    //     const path = `/onlineUsers/${uid}`;
    //     this.onlineRef$ = db.object(path);
    //     this.onlineRef$.$ref.onDisconnect().remove((error) => {
    //       if (error != null) {
    //         // error case
    //         console.log("error occurred " + error);
    //       }
    //     });
    //   });

    // this.onlineRef$ = db.object('onlineUsers/' + authService.currentUser.uid);
    // this.onlineRef$.subscribe(test => {
    //   console.log(test.$value);
    // });
    // this.onlineRef$.$ref.onDisconnect().remove((error) => {
    //   if (error != null) {
    //     // error case
    //     console.log("error occurred " + error);
    //   }
    // });
  }

  ngOnInit() {
    // this.user = this.authService.currentUser;
  }

}
