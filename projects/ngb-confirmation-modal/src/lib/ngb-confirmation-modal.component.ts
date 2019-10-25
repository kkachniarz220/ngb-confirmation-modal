import { Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgbConfirmationModalBodyDirective } from './directives/modal-body/ngb-confirmation-modal-body.directive';
import { NgbModalConfirmationModalHeaderDirective } from './directives/modal-header/ngb-modal-confirmation-modal-header.directive';

@Component({
  selector: 'lib-ngb-confirmation-modal',
  templateUrl: 'ngb-confirmation-modal.component.html',
})
export class NgbConfirmationModalComponent implements OnInit {

  @Output() closeResult = new EventEmitter();
  @Input() confirmButtonColor = 'primary';
  @Input() confirmButtonText = 'Confirm';

  @Input('openModalFlag') set openModalSet(value: boolean) {
    if (value) {
      this.openModal();
    }
  }

  @ContentChild(NgbModalConfirmationModalHeaderDirective, { static: true }) confirmationHeader: NgbModalConfirmationModalHeaderDirective;
  @ContentChild(NgbConfirmationModalBodyDirective, { static: true }) confirmationBody: NgbConfirmationModalBodyDirective;

  @ViewChild('confirmationModalElemRef', { static: true }) confirmationModalElemRef: ElementRef;

  confirmationModalRef: NgbModalRef;

  constructor(
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
  }

  openModal() {
    this.confirmationModalRef = this.modalService.open(this.confirmationModalElemRef);
  }

  emitResult(result: boolean) {
    this.confirmationModalRef.close();
    this.closeResult.emit(result);
  }
}
