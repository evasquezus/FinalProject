import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbdAlertSelfclosingComponent } from './ngbd-alert-selfclosing.component';

describe('NgbdAlertSelfclosingComponent', () => {
  let component: NgbdAlertSelfclosingComponent;
  let fixture: ComponentFixture<NgbdAlertSelfclosingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbdAlertSelfclosingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbdAlertSelfclosingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
