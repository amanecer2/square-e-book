import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookItemComponent} from './book-item/book-item.component';
import { BookItemDetailsComponent } from './book-item-details-modal/book-item-details.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BookItemComponent,
    BookItemDetailsComponent,
    PaginationComponent
  ],
  exports: [
    BookItemComponent,
    BookItemDetailsComponent,
    PaginationComponent
  ],

})
export class ComponentsModule {
}
