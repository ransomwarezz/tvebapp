import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GameType } from "../../models/game";

@Component({
  selector: 'app-game-selection',
  templateUrl: './game-selection.component.html',
  styleUrls: ['./game-selection.component.css']
})
export class GameSelectionComponent implements OnInit {

  @Output() gameType: EventEmitter<GameType> = new EventEmitter(false);

  constructor() { }

  ngOnInit() {
  }

  select8Ball() {
    console.log("select8Ball");
    this.gameType.emit(GameType.GAME_TYPE_8_BALL);
  }
}
