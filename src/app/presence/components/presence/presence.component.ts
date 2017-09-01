import { Component, OnInit } from '@angular/core';
import { PresenceService } from "../../presence.service";
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-presence',
  templateUrl: './presence.component.html',
  styleUrls: ['./presence.component.css']
})
export class PresenceComponent implements OnInit {

  presentUsers$: FirebaseListObservable<any[]>;
  users: any[];
  currentUser: string;

  constructor(private presence: PresenceService) { }

  ngOnInit() {
    console.log("PresenceComponent:ngOnInit()");

    if (this.presence.presentUsers$) {
      this.presentUsers$ = this.presence.presentUsers$;
      this.presentUsers$.subscribe(users => {
        this.users = users;
        users.forEach(user => {
          console.log(user.$key);
        });
      });
    }
    if (this.presence.currentUser) {
      this.currentUser = this.presence.currentUser;
    }
  }
}
