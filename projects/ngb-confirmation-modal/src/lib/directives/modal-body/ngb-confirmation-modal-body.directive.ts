import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ngbConfirmationModalBody]'
})
export class NgbConfirmationModalBodyDirective {

  @Input() confirmationMessage: string;

  constructor(
    public templateRef: TemplateRef<any>,
  ) { }

}
