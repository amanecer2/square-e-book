import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookComponent} from './book/book.component';
import {BooksComponent} from './books.component';
import {WishlistComponent} from './wishlist/wishlist.component';
import {APP_NAVIGATOR} from '../../constant/app-navigator.constant';


const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
    children: [
      {
        path: '',
        redirectTo: APP_NAVIGATOR.SEARCH,
        pathMatch: 'full'
      },
      {
        path: APP_NAVIGATOR.SEARCH,
        component: BookComponent
      },
      {
        path: APP_NAVIGATOR.WISHLIST,
        component: WishlistComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
