import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { firebase } from '../../../firebase';
import { IPlayer } from '../../models';

@Component({
  selector: 'app-player-list',
  template: `
    <div [ngStyle]="
    {
      'background': 'linear-gradient(0deg, rgba(255, 255, 255, 0.2), 
      rgba(255, 255, 255, 0.2)), 
      url(/assets/images/lonely.jpg) right center / cover no-repeat'
    }" fxFlexFill>

    <div class="container"
      fxLayout
      fxLayout.xs="column"
      fxLayoutAlign="center"
      fxLayoutGap="10px"
      fxLayoutGap.xs="5px">
      <div *ngFor="let player of players$ | async">
        <div *ngIf="player.$key != uid">
          <app-player-item (invite)="invite.emit($event)" [player]="player"></app-player-item>
        </div>  
      </div>
      <div *ngIf="(players$ | async)?.length <= 1">
        <!-- No players available. -->
        <md-progress-bar mode="indeterminate"></md-progress-bar>
        <div fxLayout
          fLayoutAlign="center">
        <md-spinner></md-spinner>
        </div>
        <p>Keine Spieler online.</p>
      </div>
    </div>

    </div>
  `,
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  @Input() uid: string;
  @Input() players$: FirebaseListObservable<IPlayer[]>;
  @Output() invite: EventEmitter<IPlayer> = new EventEmitter(false);
  
  numberOfPlayers: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
