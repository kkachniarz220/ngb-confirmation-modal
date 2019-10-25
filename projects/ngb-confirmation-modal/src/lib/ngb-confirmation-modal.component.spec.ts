import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbConfirmationModalComponent } from './ngb-confirmation-modal.component';

describe('NgbConfirmationModalComponent', () => {
  let component: NgbConfirmationModalComponent;
  let fixture: ComponentFixture<NgbConfirmationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbConfirmationModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbConfirmationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
