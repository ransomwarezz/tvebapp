/*
 * PRODUCTION ENVIRONMENT
 */

import * as firebase from 'firebase/app';

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
};