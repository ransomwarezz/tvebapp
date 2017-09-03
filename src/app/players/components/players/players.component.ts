import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FirebaseListObservable } from 'angularfire2/database';
import { PlayersService } from "../../players.service";
import { IPlayer } from "../../models";

@Component({
  selector: 'app-players',
  template: `
    <app-player-list [currentUser]="playersService.user" [players$]="playersService.players$"></app-player-list>
  `
})
export class PlayersComponent implements OnInit {

  constructor(public playersService: PlayersService) { }

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
