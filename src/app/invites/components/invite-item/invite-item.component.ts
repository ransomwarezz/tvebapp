import { Component, OnInit, Input } from '@angular/core';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { PlayersService } from '../../../players/players.service';
import { IInvite } from '../../models';
import { IPlayer } from '../../../players/models/player';

@Component({
  selector: 'app-invite-item',
  template: `
    <div class="container">
      <md-card class="invite-item">
        <md-card-header>
          <img md-card-avatar src="{{ (player$ | async)?.photoURL }}">
          <md-card-title>{{ (player$ | async)?.name }}</md-card-title>
          <md-card-subtitle>{{ (player$ | async)?.league }}</md-card-subtitle>
        </md-card-header>
        <!-- <md-card-content> -->
          <!-- <p>Here comes the player statistics</p> -->
        <!-- </md-card-content> -->
        <md-card-actions align="end">
          <button md-button (click)="startGame()">Spielen</button>
        </md-card-actions>
      </md-card>
    </div>
  `,
  styleUrls: ['./invite-item.component.css']
})
export class InviteItemComponent implements OnInit {

  @Input() invite: IInvite;

  player$: FirebaseObjectObservable<IPlayer>;

  constructor(public playersService: PlayersService) { }
  
  ngOnInit() {
    this.player$ = this.playersService.getPlayer(this.invite.invitedBy);
  }

  startGame() {
    console.log("startGame()");
  }
}
