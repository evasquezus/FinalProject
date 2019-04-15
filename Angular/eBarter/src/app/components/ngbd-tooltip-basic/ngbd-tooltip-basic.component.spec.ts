import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbdTooltipBasicComponent } from './ngbd-tooltip-basic.component';

describe('NgbdTooltipBasicComponent', () => {
  let component: NgbdTooltipBasicComponent;
  let fixture: ComponentFixture<NgbdTooltipBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbdTooltipBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbdTooltipBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
