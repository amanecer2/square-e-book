import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BookComponent } from './book/book.component';
import {SharedModule} from '../../shared/shared.module';
import { BooksComponent } from './books.component';
import { WishlistComponent } from './wishlist/wishlist.component';


@NgModule({
  declarations: [
    BookComponent,
    BooksComponent,
    WishlistComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    SharedModule
  ],
  providers: []
})
export class BooksModule { }
