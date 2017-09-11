import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { environment } from '../environments/environment';

import { AuthService } from "./auth";
import { firebase } from "./firebase";

import { MdSnackBar } from './material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  navItems = [
    { name: 'Home', icon: 'home', route: '' },
    { name: 'Über uns', icon: 'help', route: 'about' },
  ];

  // differ between development and production environment
  environmentName = environment.envName === "prod" ? "" : environment.envName;

  authenticated$: Observable<boolean>;
  user$: Observable<firebase.User>;
  
  constructor(
    private authService: AuthService, 
    public snackbar: MdSnackBar,
    private router: Router
  ) {
    this.authenticated$ = this.authService.authenticated$;
    this.user$ = this.authService.user$;
  }

  logout() {
    this.authService.logout();
  }

  ngOnInit() {
  }

}
