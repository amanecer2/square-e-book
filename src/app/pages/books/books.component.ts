import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-books',
  template: `
    <div class="p-2 d-flex justify-content-around">
      <div class="d-flex align-self-center">
        hello {{(userService.user$ | async)?.username}}
      </div>
      <div class=" ">
        <button routerLink="/books/search" routerLinkActive="btn-primary" class="btn px-2">search</button>
        <button routerLink="/books/wishlist" routerLinkActive="btn-info" class="btn ">wishlist</button>
      </div>
    </div>
    <router-outlet></router-outlet>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksComponent implements OnInit {

  constructor(  public userService: UserService) { }

  ngOnInit(): void {
  }

}
