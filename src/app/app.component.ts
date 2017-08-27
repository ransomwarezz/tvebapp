import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

import { environment } from '../environments/environment';

// import { AuthService } from './core/auth.service';
import { AuthService } from "./auth";
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  navItems = [
    { name: 'Home', icon: 'home', route: '' },
    { name: 'Social Media', icon: 'cloud', route: 'socialmedia' },
    { name: 'Über uns', icon: 'help', route: 'about' },
    // { name: 'Login', route: 'login' },
  ];

  // differ between development and production environment
  environmentName = environment.envName === "prod" ? "" : environment.envName;

  authenticated: boolean = false;

  constructor(private authService: AuthService, private router: Router) 
  {
    // this.authService.currentUserObservable.subscribe(user => {
    //   if (user) {
    //     this.authenticated = true;
    //     // enter the user to the presence system
    //     this.presenceService.connect(user);
    //   }
    //   else {
    //     this.authenticated = false;
    //   }
    // });
    // setTimeout(afterTimeout => {
    //   console.log("after timeout");
    // }, 1000);
  }

}
