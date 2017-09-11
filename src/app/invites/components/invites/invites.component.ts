import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { InvitesService } from '../../invites.service';
import { IInvite } from '../../models/invite';

@Component({
  selector: 'app-invites',
  template: `
    List of invites:
    <div *ngFor="let invite of invitesService.invites$ | async">
      <p>
        Invited by {{invite.challenger}} at {{ invite.timestamp * 1000 | date }}
      </p>
    </div>
  `
})
export class InvitesComponent implements OnInit {

  constructor(private invitesService: InvitesService) { 
    // this.invitesService.invites$.subscribe(invites => {
    //   invites.forEach(invite => {
    //     console.log(invite);
    //   });
    // })
  }

  ngOnInit() {
  }

}
