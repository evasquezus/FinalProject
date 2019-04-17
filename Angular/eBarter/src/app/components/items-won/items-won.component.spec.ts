import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsWonComponent } from './items-won.component';

describe('ItemsWonComponent', () => {
  let component: ItemsWonComponent;
  let fixture: ComponentFixture<ItemsWonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsWonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsWonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
