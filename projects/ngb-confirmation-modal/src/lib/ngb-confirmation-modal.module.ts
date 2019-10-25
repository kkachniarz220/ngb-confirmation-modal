import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbConfirmationModalComponent } from './ngb-confirmation-modal.component';
import { NgbConfirmationModalBodyDirective } from './directives/modal-body/ngb-confirmation-modal-body.directive';
import { NgbConfirmationModalHeaderDirective } from './directives/modal-header/ngb-confirmation-modal-header.directive';

@NgModule({
  declarations: [
    NgbConfirmationModalComponent,
    NgbConfirmationModalBodyDirective,
    NgbConfirmationModalHeaderDirective
  ],
  imports: [
    CommonModule,
    NgbModalModule
  ],
  exports: [
    NgbConfirmationModalComponent,
    NgbConfirmationModalBodyDirective,
    NgbConfirmationModalHeaderDirective,
  ]
})
export class NgbConfirmationModalModule {}
