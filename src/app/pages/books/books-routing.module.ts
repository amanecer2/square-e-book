import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookComponent} from './book/book.component';
import {BooksComponent} from './books.component';
import {WishlistComponent} from './wishlist/wishlist.component';


const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
    children: [
      {
        path: '',
        redirectTo: 'search',
        pathMatch: 'full'
      },
      {
        path: 'search',
        component: BookComponent
      },
      {
        path: 'wishlist',
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
