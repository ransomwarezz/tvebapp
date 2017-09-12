import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth';
import { InvitesService } from '../../../invites';
import { PlayersService } from "../../players.service";
import { IPlayer } from "../../models";

@Component({
  selector: 'app-players',
  template: `
    <!-- <app-player-list [uid]="(playersService.currentPlayer$ | async)?.uid" [players$]="playersService.players$" (invite)="invitePlayer($event)"></app-player-list> -->
    <app-player-list 
      [uid]="(playersService.currentPlayer$ | async)?.uid" 
      [players$]="playersService.players$" 
      (invite)="invitesService.createInvite($event.$key)">
    </app-player-list>
  `
})
export class PlayersComponent implements OnInit {

  constructor(public auth: AuthService, public playersService: PlayersService, public invitesService: InvitesService) { }

  ngOnInit() {
  }
  
}
