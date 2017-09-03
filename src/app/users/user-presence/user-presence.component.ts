import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { UserService } from "../shared/user.service";
import { User } from "../shared/user";

@Component({
  selector: 'app-user-presence',
  templateUrl: './user-presence.component.html',
  styleUrls: ['./user-presence.component.css'],
})
export class UserPresenceComponent implements OnInit {

  onlineUsers: any[] = [];
  users: any[] = [];
  
  // users$: FirebaseListObservable<any[]>;

  onlineUsers$: FirebaseListObservable<any[]>;
  currentKey: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    // get list of users online/present
    this.onlineUsers$ = this.userService.getOnlineUsers();

    // this.onlineUsers$ = this.presenceService.users;
    // this.onlineUsers$.subscribe(onlineUsers => {
    //   this.currentKey = onlineUser.$key;
    // });
    // this.onlineUsers$
      // .map((onlineUser) => {
      //   console.log("onlineUser");
      //   console.log(onlineUser);
      //   // return this.userService.getUser(onlineUser);
      //   return onlineUser;
      // })
      // .subscribe(user => {
      //   console.log("user");
      //   console.log(user);
      //   this.users$ = user;
      // })
    // this.onlineUsers$.subscribe(users => {
    //   // for each user retrieve the user information to be displayed
    //   users.forEach(onlineUser => {
    //     console.log("user " + onlineUser.$key + " is present");
    //     // do not include our own
    //     if (this.presenceService.currentUser.uid != onlineUser.$key) { 
    //       this.userService.getUser(onlineUser.$key).subscribe(user => {
    //         this.users.push(user);
    //       });
    //     }
    //   });
    // });
  }
}
