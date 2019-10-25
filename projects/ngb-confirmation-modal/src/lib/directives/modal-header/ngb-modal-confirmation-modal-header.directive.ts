import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[ngbModalConfirmationModalHeader]'
})
export class NgbModalConfirmationModalHeaderDirective {

  @Input() confirmationMessage: string;

  constructor(
    public templateRef: TemplateRef<any>,
  ) {}

}
