import { Component, OnInit, Input } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { IInvite } from '../../models';

@Component({
  selector: 'app-invite-list',
  template: `
    <div class="container"
      fxLayout
      fxLayout.xs="column"
      fxLayoutAlign="center"
      fxLayoutGap="10px"
      fxLayoutGap.xs="5px">
      <div *ngFor="let invite of invites$ | async">
        <app-invite-item [invite]="invite"></app-invite-item>
      </div>
    </div>
  `,
  styleUrls: ['./invite-list.component.css']
})
export class InviteListComponent implements OnInit {

  @Input() invites$: FirebaseListObservable<IInvite[]>;
  
  constructor() { }

  ngOnInit() {
    this.invites$.subscribe(invites => {
      console.log("InviteListComponent.invites$.subscribe");
      invites.forEach(invite => {
        console.log(invite);
      });
    })
  }

}
