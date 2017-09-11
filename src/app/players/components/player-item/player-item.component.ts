import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { IPlayer } from '../../models'

@Component({
  selector: 'app-player-item',
  templateUrl: './player-item.component.html',
  styleUrls: ['./player-item.component.css']
})
export class PlayerItemComponent implements OnInit {

  @Input() player: IPlayer; // player to show
  @Output() invite: EventEmitter<IPlayer> = new EventEmitter(false);

  constructor() { }

  ngOnInit() {
  }

  invitePlayer(player: IPlayer) {
    console.log("invite player (1)");
    console.log(player);
    this.invite.emit(player);
  }

}
