import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

import { environment } from '../environments/environment';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  navItems = [
    { name: 'Social Media', route: 'socialmedia' },
    // { name: 'Login', route: 'login' },
  ];

  environmentName = environment.envName === "prod" ? "" : environment.envName;

  authenticated: boolean = false;

  constructor(public afAuth: AngularFireAuth, private router: Router) {

    // this.afAuth.authState.subscribe(this.firebaseAuthChangeListener);
    this.afAuth.authState.subscribe(response => {
      // if needed, do a redirect in here
      if (response) {
        console.log('Logged in :)');
        this.router.navigate(['']);
      } else {
        console.log('Logged out :(');
      }
    });

    afAuth.authState.subscribe(user => {
      if (user) {
        this.authenticated = true;
      } else {
        this.authenticated = false;
      }
    });
  }

  // private firebaseAuthChangeListener(response) {
  //   // if needed, do a redirect in here
  //   if (response) {
  //     console.log('Logged in :)');
  //     // this.navigate();
  //   } else {
  //     console.log('Logged out :(');
  //   }
  // }

  // navigate() {
  //   this.router.navigate(['']);
  // }

  logout() {
    this.afAuth.auth.signOut();
    console.log('AppComponent: logged out');
    this.router.navigateByUrl('');
  }
}
