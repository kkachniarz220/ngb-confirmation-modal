import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[ngbConfirmationModalBody]'
})
export class NgbConfirmationModalBodyDirective {

  @Input() confirmationBody: string;

  constructor(
    public templateRef: TemplateRef<any>,
  ) { }

}
