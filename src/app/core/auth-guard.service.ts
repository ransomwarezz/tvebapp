import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from "angularfire2/auth";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  canActivate(): Observable<boolean> {
    return this.afAuth.authState
      .take(1)
      .map(authState => !!authState)
      .do(authenticated => {
        if (!authenticated) {
          // navigate to login page
          this.router.navigate(['/login']);
        } else {
          console.log("User authenticated");
        }
      });
  }
}
