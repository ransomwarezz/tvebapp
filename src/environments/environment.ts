// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
import * as firebase from 'firebase/app';

export const environment = {
  production: false,
  envName: 'dev',
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
  //   'signInSuccessUrl': 'http://localhost:4200',
  //   'signInOptions': [
  //     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  //     firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  //     firebase.auth.TwitterAuthProvider.PROVIDER_ID,
  //     firebase.auth.GithubAuthProvider.PROVIDER_ID,
  //     firebase.auth.EmailAuthProvider.PROVIDER_ID
  //   ],
  //   'callbacks': {
  //     'signInSuccess': function (currentUser, credential, redirectUrl) {
  //       return true;
  //     }
  //   }
  // }
};
