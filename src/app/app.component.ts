import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { environment } from '../environments/environment';

import { AuthService } from "./auth";
import { UserService } from "./users/shared/user.service";
import { firebase } from "./firebase";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  navItems = [
    { name: 'Home', icon: 'home', route: '' },
    { name: 'Über uns', icon: 'help', route: 'about' },
    { name: 'Players', icon: 'help', route: 'players' },
  ];

  // differ between development and production environment
  environmentName = environment.envName === "prod" ? "" : environment.envName;

  authenticated$: Observable<boolean>;
  user$: Observable<firebase.User>;
  
  constructor(private authService: AuthService, private userService: UserService, private router: Router) {
    this.authenticated$ = this.authService.authenticated$;
    this.user$ = this.authService.user$;
    this.authService.user$.subscribe(user => {
      if (user) {
        // enter the user to the presence system / a list of available/present users
        // this.presenceService.connect(user);
        this.userService.registerUser(user);
      }
    });
  }

  logout() {
    this.authService.logout();
  }
}
