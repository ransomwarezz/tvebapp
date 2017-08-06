import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { AuthService } from "../../core/auth.service";
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user$: Observable<firebase.User>;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.user$ = this.authService.currentUser;
  }

}
