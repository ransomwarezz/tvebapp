import { Component, OnInit, Input } from '@angular/core';
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
  <!-- <div class="player-list"> -->
  <!-- <div fxLayout="row wrap" fxLayoutAlign="space-around"> -->
  <div class="container"
    fxLayout
    fxLayout.xs="column"
    fxLayoutAlign="center"
    fxLayoutGap="10px"
    fxLayoutGap.xs="5px">
    <div *ngFor="let player of players$ | async">
      <div *ngIf="player.$key != currentUser.uid">
        <app-player-item [player]="player"></app-player-item>
      </div>
    </div>
  </div>
`,
styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  @Input() players$: FirebaseListObservable<IPlayer[]>;
  @Input() currentUser: firebase.User;
  
  constructor() { }

  ngOnInit() {
  }

}
