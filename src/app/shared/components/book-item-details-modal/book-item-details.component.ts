import {Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
import {IBook} from '../../../interfaces/books.interface';
import {IModalFunctions} from '../../../services/modal/modal.component';

@Component({
  selector: 'app-book-item-details',
  template: `
    <div class="modal-header">
      <button type="button" class="close" data-dismiss="modal" (click)="functions.onCancel()" aria-label="Close"><span
        aria-hidden="true">&times;</span></button>
      <h4 class="modal-title">{{book.volumeInfo.title}}</h4>
    </div>

    <div class="card modal-body">
      <div class="row no-gutters">
        <div class="col-auto">
          <img [src]="book.volumeInfo.imageLinks.smallThumbnail" class="img-fluid" alt="">
        </div>
        <div class="col">
          <div class="card-block px-2 h-100">
            <h5
              class="card-title text-center p-1 trim-text w-100 d-flex justify-content-center align-items-center">{{book.volumeInfo.title}}</h5>
            <article class="card-text w-100 mh-50 overflow-auto">{{book.volumeInfo.description}}</article>
          </div>
        </div>
      </div>
      <div class="card-footer w-100 text-muted">
        {{book.volumeInfo.authors}}
      </div>
      <div class="modal-footer">
        <button type="button"
                class="btn"
                [ngClass]="{'btn-success': !isFavorite, 'btn-danger': isFavorite}"
                (click)="functions.onCustomFunction(!isFavorite)">{{isFavorite ? 'remove' : 'add' }} favorite
        </button>
        <button type="button" class="btn btn-primary" (click)="functions.onOk()">close</button>
      </div>
    </div>
  `,
  styleUrls: ['./book-item-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookItemDetailsComponent implements OnInit {

  @Input() book: IBook.Item;
  @Input() functions: IModalFunctions;
  @Input() isFavorite: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

}
