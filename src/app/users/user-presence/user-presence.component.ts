import { Component, OnInit } from '@angular/core';
// import { PresenceService } from '../shared/presence.service';
import { Observable } from 'rxjs/Observable';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-user-presence',
  templateUrl: './user-presence.component.html',
  styleUrls: ['./user-presence.component.css'],
  // providers: [PresenceService]
})
export class UserPresenceComponent implements OnInit {

  users$: FirebaseListObservable<any[]>;

  // constructor(private presenceService: PresenceService) { }

  ngOnInit() {
    // this.users$ = this.presenceService.users;
    // this.users$.subscribe(users => {
    //   users.forEach(element => {
    //     console.log("user " + element.$key + " is present");
    //   });
    // });
  }

}
