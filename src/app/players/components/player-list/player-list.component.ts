import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { firebase } from '../../../firebase';
import { IPlayer } from '../../models';

@Component({
  selector: 'app-player-list',
  template: `
  <!--
  <ul class="task-filters">
    <li><a [class.active]="!filter" [routerLink]="['/tasks']">View All</a></li>
    <li><a [class.active]="filter === 'false'" [routerLink]="['/tasks', {completed: false}]">Active</a></li>
    <li><a [class.active]="filter === 'true'" [routerLink]="['/tasks', {completed: true}]">Completed</a></li>
  </ul>
  -->
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
  </div>
`,
styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  @Input() uid: string;
  @Input() players$: FirebaseListObservable<IPlayer[]>;
  @Output() invite: EventEmitter<IPlayer> = new EventEmitter(false);
  
  constructor() { }

  ngOnInit() {
  }

}
