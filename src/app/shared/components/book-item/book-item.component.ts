import {Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
import {IBook} from '../../../interfaces/books.interface';

@Component({
  selector: 'app-book-item',
  template: `
    <div class="card" *ngIf="book">
      <div class="row no-gutters h-75">
        <div class="col-auto">
          <img [src]="book.volumeInfo?.imageLinks?.smallThumbnail" class="img-fluid h-100" alt="">
        </div>
        <div class="col">
          <div class="card-block px-2 h-100">
            <h5
              class="card-title text-center p-1 trim-text w-100 h-50 d-flex justify-content-center align-items-center">{{book.volumeInfo.title}}</h5>
            <article class="card-text trim-text w-100 h-50">{{book.volumeInfo.description}}</article>
            <a class="btn btn-primary text-white w-100" (click)="onModerDetailsHandler()">show more details</a>
          </div>
        </div>
      </div>
      <div class="card-footer w-100 text-muted">
        {{book.volumeInfo.authors}}
      </div>
    </div>
  `,
  styles: [`
    .card {
      max-height: 300px;
      height: 3000px;
    }

    .card-block {
      max-height: 150px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookItemComponent implements OnInit {

  @Input() book: IBook.Item;

  @Output() onBookDetails = new EventEmitter<null>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onModerDetailsHandler() {
    this.onBookDetails.emit();
  }

}
