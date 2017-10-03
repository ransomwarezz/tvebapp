import { Component, OnInit } from '@angular/core';

import { PlayersService } from "../../../players";

@Component({
  selector: 'app-game-competitor',
  templateUrl: './game-competitor.component.html',
  styleUrls: ['./game-competitor.component.css']
})
export class GameCompetitorComponent implements OnInit {

  constructor(private playersService: PlayersService) { }

  ngOnInit() {
  }

  playerSelected($event) {
    console.log("playerSelected");
    console.log($event);
  }

}
