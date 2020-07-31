import {AfterViewInit, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {BookService} from './book.service';
import {IUser, UserService} from '../../../services/user.service';
import {combineLatest, Observable} from 'rxjs';
import {IBook} from '../../../interfaces/books.interface';
import {TrackByService} from '../../../services/trackby.service';
import {ModalService} from '../../../services/modal/modal.service';
import {tap} from 'rxjs/operators';
import {IWhislistState, WishlistStateService} from '../../../state/wishlist-state.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html'
})
export class BookComponent implements OnInit, AfterViewInit {

  data$: Observable<[
    IBook.RootObject[],
    IWhislistState]>;

  MAPPER = {BOOKS: 0, WISH_LIST: 1};

  @ViewChild('defaultModal') public tpl: TemplateRef<any>;

  query = this.bookService.lastQuery;

  constructor(private bookService: BookService,
              public trackByService: TrackByService,
              private modalService: ModalService,
              private wishlistStateService: WishlistStateService) { }

  ngOnInit(): void {
    this.data$ = combineLatest(
      this.bookService.data$,
      this.wishlistStateService.wishlist$,
    );
  }

  ngAfterViewInit(): void {
  }

  onInputHandler(query: string) {
    this.bookService.searchBook(query).subscribe();
  }

  onBookDetailsHandler(book: IBook.Item, isFavorite: boolean) {
    this.modalService.show({data: {book, isFavorite}}, this.tpl)
      .pipe(
        tap(condition => this.addOrRemoveWishlist(condition, book))
      )
      .subscribe();
  }

  addOrRemoveWishlist(condition: boolean, book: IBook.Item) {
    if (condition) {
      this.bookService.addBookToWishlist(book);
    } else {
      this.bookService.removeBookToWishlist(book);

    }
  }
}
