# NgbConfirmationModal
### Input

| Input   |      Type      |  Default value  |
|----------|:-------------:|------:|
| [confirmButtonColor] |  text | primary |
| [confirmButtonText] |    text   |   Confirm |
| [cancelButtonColor] |  text | secondary |
| [cancelButtonText] |    text   |   Cancel |
| [openModalFlag] | boolean |    false |

- `confirmButtonColor`: Bootstrap color of confirmation button.
- `confirmButtonText`: Confirmation button text.
- `cancelButtonColor`: Bootstrap color of cancel button.
- `cancelButtonText`: Cancel button text.
- `openModalFlag`: If you set to `true` modal will open.
###### Available colors:

- primary
- warning
- secondary
- danger
- success
- info
- dark
- light
- muted
- white
<hr>

### Output

| Output   |      Returned type |
|----------|:-------------:|
| (closeResult) | boolean |
 
- `Confirm button click`: returned value: `true`
- `Cancel button click`: returned value: `false`


<hr>

#### Templates

###### Modal header
- confirmationModalHeader (default value: `Confirmation`)
```html
<ngb-confirmation-modal>

  <ng-template ngbConfirmationModalHeader>
    Confirmation about user delete
  </ng-template>

</ngb-confirmation-modal>
```
###### Modal body
- confirmationModalBody (default value: `Are you sure?`)
```html
<ngb-confirmation-modal>

  <ng-template ngbConfirmationModalBody>
    Are you sure you want to delete a user?
  </ng-template>

</ngb-confirmation-modal>
```

###### Finaly example:
```html
<ngb-confirmation-modal (closeResult)="onConfirmationModalResult($event)" [openModalFlag]="openConfirmationModal">

  <ng-template ngbConfirmationModalHeader>
    Confirmation about user delete
  </ng-template>

  <ng-template ngbConfirmationModalBody>
    {{ 'Are you sure you want to delete a user?' | translate }}
  </ng-template>

</ngb-confirmation-modal>
```
    
