import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ngbConfirmationModalHeader]'
})
export class NgbConfirmationModalHeaderDirective {

  @Input() confirmationMessage: string;

  constructor(
    public templateRef: TemplateRef<any>,
  ) {}

}
