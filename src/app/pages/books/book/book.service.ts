import {Injectable, OnDestroy} from '@angular/core';
import {GoogleBooksService} from '../../../services/google-books.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {IBook} from '../../../interfaces/books.interface';
import {tap} from 'rxjs/operators';
import {WishlistStateService} from '../../../state/wishlist-state.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private _data$ = new BehaviorSubject<IBook.RootObject[]>(undefined);
  data$ = this._data$.asObservable();

  lastQuery = '';

  constructor(private googleBooksService: GoogleBooksService,
              private wishlistStateService: WishlistStateService) {
  }


  searchBook(query: string) {
    return this.googleBooksService
      .searchBook(query)
      .pipe(
        tap((res: any) => {
          this._data$.next(res);
          this.lastQuery = query;
        })
      );
  }

  addBookToWishlist(book: IBook.Item) {
    this.wishlistStateService.addWishlist(book);
  }

  removeBookToWishlist(book: IBook.Item) {
    this.wishlistStateService.removeWishlist(book.id);
  }
}


