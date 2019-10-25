import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbConfirmationModalComponent } from './ngb-confirmation-modal.component';
import { NgbConfirmationModalBodyDirective } from './directives/modal-body/ngb-confirmation-modal-body.directive';
import { NgbModalConfirmationModalHeaderDirective } from './directives/modal-header/ngb-modal-confirmation-modal-header.directive';

@NgModule({
  declarations: [
    NgbConfirmationModalComponent,
    NgbConfirmationModalBodyDirective,
    NgbModalConfirmationModalHeaderDirective
  ],
  imports: [
    CommonModule,
    NgbModalModule
  ],
  exports: [
    NgbConfirmationModalComponent,
  ]
})
export class NgbConfirmationModalModule {}
