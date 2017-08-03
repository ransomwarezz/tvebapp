//declare var firebaseui: any;

import { Component, OnInit, HostBinding } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

//import { moveIn } from '../router.animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: Observable<firebase.User>;
  ui: any;

  constructor(public afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
    this.user = this.afAuth.authState;

    var firebaseuiConfig = {
      'siteName': 'experimentOne',
      'signInSuccessUrl': 'https://tvebapp.firebaseapp.com',
      'signInOptions': [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        //firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      'callbacks': {
        'signInSuccess': function (currentUser, credential, redirectUrl) {
          console.log('User signed in succesfully.');
          return true;
        }
      }
    };
    this.ui = new firebaseui.auth.AuthUI(firebase.auth());
    // this.ui.start('#firebaseui-auth-container', environment.firebaseuiConfig);
    this.ui.start('#firebaseui-auth-container', firebaseuiConfig);
    return this.ui;
  }
}
