import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {WishlistService} from './wishlist.service';
import {TrackByService} from '../../../services/trackby.service';
import {IBook} from '../../../interfaces/books.interface';

@Component({
  selector: 'app-wishlist',
  template: `
    <ng-container *ngIf="wishlistService.data$ | async as wishlist">
      <ng-container *ngIf="wishlist.length > 0; else noWishlists">
        <table>
          <thead>
          <th class="text-center px-2">#</th>
          <th class="text-center px-2">name</th>
          <th class="text-center px-2">author</th>
          <th class="text-center px-2"></th>
          </thead>
          <tbody>
          <tr *ngFor="let book of wishlist; trackBy: trackByService.itemID; let i = index ">
            <td class="text-center px-2">{{i}}  </td>
            <td class="text-center px-2"> {{book.volumeInfo.title}}</td>
            <td class="text-center px-2"> {{book.volumeInfo.authors[0]}}</td>
            <td class="text-center px-2"><span class="badge badge-danger" (click)="onRemoveBookHandler(book)">remove</span></td>
          </tr>
          </tbody>
        </table>

      </ng-container>

      <ng-template #noWishlists>
        <div class="d-flex justify-content-center">
          You dont have any wishlist yet. Please feel free to search for one.
        </div>
      </ng-template>

    </ng-container>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [WishlistService]
})
export class WishlistComponent implements OnInit {

  constructor(public wishlistService: WishlistService,
              public trackByService: TrackByService) {
  }

  ngOnInit(): void {
  }

  onRemoveBookHandler(book: IBook.Item) {
    this.wishlistService.removeBook(book);
  }
}
