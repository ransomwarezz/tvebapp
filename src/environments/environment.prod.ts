/*
 * PRODUCTION ENVIRONMENT
 */

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

export const environment = {
  production: true,
  envName: 'prod',
  firebase: {
    apiKey: "AIzaSyAThCTdfoE1PzRgZuD4dR2A-bLJs0TWob8",
    authDomain: "tvebapp.firebaseapp.com",
    databaseURL: "https://tvebapp.firebaseio.com",
    projectId: "tvebapp",
    storageBucket: "",
    messagingSenderId: "494609528633"
  },
  // firebaseuiConfig: {
  //   'siteName': 'tvebapp',
  //   'signInSuccessUrl': 'https://tvebapp.firebaseapp.com',
  //   'signInOptions': [
  //     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  //     firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  //     firebase.auth.TwitterAuthProvider.PROVIDER_ID,
  //     firebase.auth.GithubAuthProvider.PROVIDER_ID,
  //     firebase.auth.EmailAuthProvider.PROVIDER_ID
  //   ],
  //   'callbacks': {
  //     'signInSuccess': function (currentUser, credential, redirectUrl) {
  //       console.log('User signed in succesfully.');
  //       return true;
  //     }
  //   }
  // }
};
