import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {take, switchMap, tap} from 'rxjs/operators';
import {UserService} from '../services/user.service';
import {APP_NAVIGATOR} from '../constant/app-navigator.constant';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private userService: UserService,
              private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authOrNavigateToAuth();
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.authOrNavigateToAuth();
  }

  authOrNavigateToAuth() {
    return this.userService.user$
      .pipe(
        take(1),
        switchMap( user => of(!!user.username)),
        tap( isAuth => {
          if (!isAuth) {
            this.router.navigate([APP_NAVIGATOR.LOG_IN]);
          }
        }),
        tap(console.log)
      );
  }
}
