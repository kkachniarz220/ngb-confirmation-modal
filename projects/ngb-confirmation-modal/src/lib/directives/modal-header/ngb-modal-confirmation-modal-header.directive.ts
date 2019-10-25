import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ngbModalConfirmationModalHeader]'
})
export class NgbModalConfirmationModalHeaderDirective {

  @Input() confirmationMessage: string;

  constructor(
    public templateRef: TemplateRef<any>,
  ) {}

}
