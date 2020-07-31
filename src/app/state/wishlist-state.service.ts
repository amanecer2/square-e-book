import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {IBook} from '../interfaces/books.interface';

export interface IWhislistState {
   books: IBook.Item[];
   mapper: {[bookId: string]: number};
}
export const __INIT_WISHLIST_STATE: IWhislistState = {
  mapper: {},
  books: [],
};


@Injectable({
  providedIn: 'root'
})
export class WishlistStateService {

  private _wishlist$ = new BehaviorSubject<IWhislistState>(__INIT_WISHLIST_STATE);
  wishlist$ = this._wishlist$.asObservable();

  constructor() {
  }

  private get state() {
    return this._wishlist$.getValue();
  }

  private set state(wishlist) {
    this._wishlist$.next(wishlist);
  }

  addWishlist(book: IBook.Item) {
    const newState = {...this.state};

    const books = [...newState.books, book];

    newState.books = books;
    newState.mapper = setMapper(books);

    this.state = {...this.state, ...newState};
  }

  removeWishlist(bookId: string) {
    const newState = {...this.state};
    const index = newState.books.findIndex(_book => _book.id === bookId);

    if (index > -1) {

      const books = newState.books.filter((_, _index) => _index !== index);

      newState.books = books;

      newState.mapper = setMapper(books);
    }


    this.state = {...this.state, ...newState};
  }
}


export function setMapper(data: any[], key = 'id') {
  const mapper = {};
  data.forEach((_item, index) => mapper[_item[key]] = index);
  return mapper;
}
