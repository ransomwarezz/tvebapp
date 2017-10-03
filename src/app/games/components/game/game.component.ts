import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Game, GameState, GameType } from "../../models/game";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  game: Game;

  gameState = GameState;

  constructor(private router: Router) { 
    this.game = new Game();
  }

  ngOnInit() {
  }

  setType(type: GameType) {
    this.game.type = type;
    console.log("type = " + this.game.type);
    this.router.navigate(['game-competitor']);
  }

}
