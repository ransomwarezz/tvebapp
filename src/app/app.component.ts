import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDarkTheme: boolean = false;

  items: FirebaseListObservable<any[]>;
  name: any;
  constructor(db: AngularFireDatabase) {
    this.items = db.list('items');
  }

  navItems = [
    { name: 'Social Media', route: 'socialmedia' },
  ];

}
