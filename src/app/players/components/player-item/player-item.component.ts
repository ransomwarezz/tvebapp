import { Component, OnInit, Input } from '@angular/core';
import { IPlayer } from '../../models'

@Component({
  selector: 'app-player-item',
  templateUrl: './player-item.component.html',
  styleUrls: ['./player-item.component.css']
})
export class PlayerItemComponent implements OnInit {

  @Input() player: IPlayer;

  constructor() { }

  ngOnInit() {
  }

}
