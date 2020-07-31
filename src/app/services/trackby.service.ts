import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrackByService {

  itemID(index: number, item: { id: number | string }) {
    return item.id;
  }

  index(index: number, order: any) {
    return index;
  }
}
