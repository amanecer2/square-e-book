import {Injectable, TemplateRef} from '@angular/core';
import {Observable} from 'rxjs';

export interface IModalContent {
  header?: string;
  body?: string;
  cancelButtonText?: string;
  OKButtonText?: string;
  cancelButtonVisible?: boolean;
  okButtonVisible?: boolean;
  data?: {};
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() {}

  show: (modalContent?: IModalContent | any, template?: TemplateRef<any>) => Observable<boolean | any>;
  hide: () => void;

}
