import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth';
import { InvitesService } from '../../../invites';
import { PlayersService } from "../../players.service";
import { IPlayer } from "../../models";

@Component({
  selector: 'app-players',
  template: `
    <app-player-list [uid]="(playersService.currentPlayer$ | async)?.uid" [players$]="playersService.players$" (invite)="invitePlayer($event)"></app-player-list>
  `
})
export class PlayersComponent implements OnInit {

  constructor(public auth: AuthService, public playersService: PlayersService, public invitesService: InvitesService) { }

  ngOnInit() {
  }
  
  invitePlayer(player: IPlayer) {
    console.log("invite player (3)");
    console.log(player);
    console.log("this.auth.user.uid = " + this.auth.user.uid);
    this.playersService.invitePlayer(this.auth.user.uid, player.uid);
  }
}
