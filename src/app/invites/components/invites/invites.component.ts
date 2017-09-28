import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { PlayersService } from '../../../players/players.service';
import { InvitesService } from '../../invites.service';
import { IInvite } from '../../models/invite';

@Component({
  selector: 'app-invites',
  template: `
    <!-- <div *ngFor="let invite of invitesService.invites$ | async">
      <p>
        Invited by {{invite.invitedBy}} at {{ invite.timestamp | date:'medium' }}
      </p>
    </div> -->
    <app-invite-list
      [invites$]="invitesService.invites$">
    </app-invite-list>
  `
})
export class InvitesComponent implements OnInit {

  constructor(public playersService: PlayersService, public invitesService: InvitesService) { }
  
  ngOnInit() {
    // this.invitesService.invites$.subscribe(invites => {
    //   console.log("InvitesComponent.invites$.subscribe");
    //   invites.forEach(invite => {
    //     console.log(invite);
    //   });
    // })
  }

}
