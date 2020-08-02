import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

export interface IUser {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //private _user$ = new BehaviorSubject<IUser>({username: 'amanecer', password: '324234'});
  private _user$ = new BehaviorSubject<IUser>({username: undefined, password: undefined});
  user$ = this._user$.asObservable();

  constructor() {
  }

  login(user) {
    if (user.username && user.password) {
      this._user$.next(user);
      return true;
    }
    return false;
  }

  get user() {
    return this._user$.getValue();
  }
}
