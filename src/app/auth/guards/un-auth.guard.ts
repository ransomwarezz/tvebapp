import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth.service';

@Injectable()
export class UnAuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth.authenticated$
      .take(1)
      .do(authenticated => {
        if (authenticated) {
          this.router.navigate(['']);
        }
      })
      .map(authenticated => !authenticated);
  }
}
