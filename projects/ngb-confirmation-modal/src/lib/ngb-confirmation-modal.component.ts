import { Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgbConfirmationModalBodyDirective } from './directives/modal-body/ngb-confirmation-modal-body.directive';
import { NgbConfirmationModalHeaderDirective } from './directives/modal-header/ngb-confirmation-modal-header.directive';

@Component({
  selector: 'ngb-confirmation-modal',
  templateUrl: 'ngb-confirmation-modal.component.html',
})
export class NgbConfirmationModalComponent implements OnInit {

  @Output() closeResult = new EventEmitter();

  @Input() confirmButtonColor = 'primary';
  @Input() confirmButtonText = 'Confirm';
  @Input() cancelButtonText = 'Cancel';
  @Input() cancelButtonColor = 'secondary';

  @Input('openModalFlag') set openModalSet(value: boolean) {
    if (value) {
      this.openModal();
    }
  }

  @ContentChild(NgbConfirmationModalHeaderDirective, { static: true }) confirmationHeader: NgbConfirmationModalHeaderDirective;
  @ContentChild(NgbConfirmationModalBodyDirective, { static: true }) confirmationBody: NgbConfirmationModalBodyDirective;

  @ViewChild('confirmationModalElemRef', { static: true }) confirmationModalElemRef: ElementRef;

  confirmationModalRef: NgbModalRef;

  constructor(
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
  }

  openModal() {
    this.confirmationModalRef = this.modalService.open(this.confirmationModalElemRef, {
      backdrop: 'static',
      keyboard: false,
    });
    this.watchCloseModalResult();
  }

  watchCloseModalResult() {
    this.confirmationModalRef.result.then(result => this.closeResult.emit(result));
  }
}
