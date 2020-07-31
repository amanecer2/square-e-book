import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef, TemplateRef, ViewChild
} from '@angular/core';
import {Observable} from 'rxjs';
import {IModalContent, ModalService} from './modal.service';

@Component({
  selector: 'app-modal',
  template: `
    <div class="modal fade modal modal-backdrop" tabindex="-1" [ngClass]="{'in': modalVisibleAnimate}"
         [ngStyle]="{'display': modalVisible ? 'block' : 'none', 'opacity': modalVisibleAnimate ? 1 : 0}">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <ng-container [ngTemplateOutletContext]="{
                           $implicit: defaultModalContent,
                           functions: functions
                         }"
                        [ngTemplateOutlet]="template || defaultModal"></ng-container>
        </div>
      </div>
    </div>

    <ng-template #defaultModal>
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" (click)="cancel()" aria-label="Close"><span
          aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">{{ modalContent.header }}</h4>
      </div>
      <div class="modal-body">
        {{ modalContent.body }}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" (click)="functions.onCancel()"
                *ngIf="modalContent.cancelButtonVisible">{{ modalContent.cancelButtonText }}</button>
        <button type="button" class="btn btn-primary" (click)="ok()">{{ modalContent.OKButtonText }}</button>
      </div>
    </ng-template>
  `,
  styles:[`
   
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent implements OnInit {


  modalVisible = false;
  modalVisibleAnimate = false;
  modalContent: IModalContent = {};

  @ViewChild('defaultModal') private defaultModal: TemplateRef<any>;
  // functions interface
  cancel: () => void;
  ok: () => void;
  customFunction: (data) => void;

  functions = {
    onOk: () => this.ok(),
    onCancel: () => this.cancel(),
    onCustomFunction: (data) => this.customFunction(data),
  };

  template: TemplateRef<any>;

  defaultModalContent: IModalContent;

  constructor(private modalService: ModalService,
              private cd: ChangeDetectorRef) {
    modalService.show = this.show.bind(this);
    modalService.hide = this.hide.bind(this);
  }

  ngOnInit(): void {
    this.refreshPage();
  }

  show(modalContent: IModalContent = {}, template: TemplateRef<any>) {
    this.modalContent = Object.assign(this.defaultModalContent, modalContent);
    this.template = template;
    this.modalVisible = true;
    setTimeout(() => {
      this.modalVisibleAnimate = true;
      this.cd.markForCheck();
    });

    return new Observable( subscriber => {
      this.cancel = () => {
        subscriber.error(false);
        this.hide();
      };
      this.ok = () => {
        //subscriber.next();
        subscriber.complete();
        this.hide();
      };
      this.customFunction = (data) => {
        subscriber.next(data);
        subscriber.complete();
        this.hide();
      };
    });
  }

  hide() {
    this.modalVisibleAnimate = false;
    setTimeout(() => {
      this.modalVisible = false;
      this.refreshPage();
      this.cd.markForCheck();

    }, 300);
  }

  refreshPage() {
    this.defaultModalContent = JSON.parse(JSON.stringify(defaultModalContent));
    this.template = this.defaultModal;
  }
}


export interface IModalFunctions {
  onCancel(): void;

  onOk(): void;

  onCustomFunction(data): void;
}

const defaultModalContent: IModalContent = {
  header: 'Please Confirm',
  body: 'Are you sure you want to continue?',
  cancelButtonText: 'Cancel',
  OKButtonText: 'OK',
  cancelButtonVisible: true,
  okButtonVisible: true,
  data: {},
};
