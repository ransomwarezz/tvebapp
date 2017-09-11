import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { firebase } from '../firebase';
import { FirebaseListObservable } from 'angularfire2/database';

import { AuthService } from "../auth";
import { PlayersService } from "../players";

import {
  trigger,
  state,
  style,
  animate,
  transition,
  group
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({width: 120, transform: 'translateX(0)', opacity: 1})),
      transition('void => *', [
        style({width: 10, transform: 'translateX(50px)', opacity: 0}),
        group([
          animate('0.3s 0.1s ease', style({
            transform: 'translateX(0)',
            width: 120
          })),
          animate('0.3s ease', style({
            opacity: 1
          }))
        ])
      ]),
      transition('* => void', [
        group([
          animate('0.3s ease', style({
            transform: 'translateX(50px)',
            width: 10
          })),
          animate('0.3s 0.2s ease', style({
            opacity: 0
          }))
        ])
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  authenticated$: Observable<boolean>;
  user$: Observable<firebase.User>;

  constructor(private authService: AuthService, private playersService: PlayersService) { }

  ngOnInit() {
    this.authenticated$ = this.authService.authenticated$;
    this.user$ = this.authService.user$;
  }

}
