import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsImBiddingOnComponent } from './items-im-bidding-on.component';

describe('ItemsImBiddingOnComponent', () => {
  let component: ItemsImBiddingOnComponent;
  let fixture: ComponentFixture<ItemsImBiddingOnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsImBiddingOnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsImBiddingOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
