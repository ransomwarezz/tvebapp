import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { InvitesService } from '../../invites.service';
import { IInvite } from '../../models/invite';

@Component({
  selector: 'app-invites',
  template: `
    List of invites:
    <div *ngFor="let invite of invitesService.invites$ | async">
      <p>
        Invited by {{invite.challenger}} at {{ invite.timestamp | date:'medium' }}
      </p>
    </div>
  `
})
export class InvitesComponent implements OnInit {

  constructor(public invitesService: InvitesService) { 
  }
  
  ngOnInit() {
    // this.invitesService.invites$.subscribe(invites => {
    //   console.log("invites$.subscribe");
    //   invites.forEach(invite => {
    //     console.log(invite);
    //   });
    // })
  }

}
