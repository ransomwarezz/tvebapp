import { Component, OnInit } from '@angular/core';
import { FirebaseObjectObservable } from 'angularfire2/database';

import { PlayersService } from "../../players.service";
import { IPlayer } from "../../models";

@Component({
  selector: 'app-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.css']
})
export class PlayerProfileComponent implements OnInit {

  currentPlayer$: FirebaseObjectObservable<IPlayer>;

  constructor(public playersService: PlayersService) { 
    this.currentPlayer$ = this.playersService.currentPlayer$;
  }

  ngOnInit() {
  }

}
