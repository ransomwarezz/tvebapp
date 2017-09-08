import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth';
import { PlayersService } from "../../players.service";
import { IPlayer } from "../../models";

@Component({
  selector: 'app-players',
  template: `
    <app-player-list [uid]="auth.user.uid" [players$]="playersService.players$"></app-player-list>
  `
})
export class PlayersComponent implements OnInit {

  constructor(public auth: AuthService, public playersService: PlayersService) { }

  ngOnInit() {
    if (this.playersService.players$) {
      this.playersService.players$.subscribe((players: IPlayer[]) => {
        players.forEach(player => {
          console.log("player: " + player.name);
        });
      });
    }
  }

}
