// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAThCTdfoE1PzRgZuD4dR2A-bLJs0TWob8",
    authDomain: "tvebapp.firebaseapp.com",
    databaseURL: "https://tvebapp.firebaseio.com",
    projectId: "tvebapp",
    storageBucket: "",
    messagingSenderId: "494609528633"
  }
};
