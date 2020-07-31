import {Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-pagination',
  template: `
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <ng-container *ngFor="let page of _pages;let i = index" class="page-item" [ngSwitch]="i"></ng-container>
        <li *ngSwitchCase="0"><a class="page-link" href="#">Previous</a></li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
      </ul>
    </nav>
  `,
  styleUrls: ['./pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent implements OnInit {
  _pages = [];
  @Input() set pages(pages: number) {
    this._pages = new Array(pages).fill(0).map((_, index) => index);
  }
  @Input() onPagination = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

}
