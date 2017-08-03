import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isDarkTheme: boolean = false;
  environmentName = environment.envName === "prod" ? "" : environment.envName;

  items: FirebaseListObservable<any[]>;
  name: any;
  constructor(db: AngularFireDatabase) {
    this.items = db.list('items');
  }

  navItems = [
    { name: 'Login', route: 'login' },
    { name: 'Social Media', route: 'socialmedia' },
  ];

}
