import { Component, OnInit, HostBinding } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

import { AuthService } from "../../core/auth.service";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user$: Observable<firebase.User>;

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.user$ = this.authService.currentUser;
  }
}
