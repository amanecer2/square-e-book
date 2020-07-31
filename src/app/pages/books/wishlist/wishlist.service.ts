import { Injectable } from '@angular/core';
import {WishlistStateService} from '../../../state/wishlist-state.service';
import {map} from 'rxjs/operators';
import {IBook} from '../../../interfaces/books.interface';

@Injectable()
export class WishlistService {

  data$ = this.wishlistStateService.wishlist$.pipe( map(state => state.books));

  constructor(private wishlistStateService: WishlistStateService) { }

  removeBook(book: IBook.Item | {id: string}) {
    this.wishlistStateService.removeWishlist(book.id);
  }
}
