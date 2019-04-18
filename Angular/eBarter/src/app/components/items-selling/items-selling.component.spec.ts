import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsSellingComponent } from './items-selling.component';

describe('ItemsSellingComponent', () => {
  let component: ItemsSellingComponent;
  let fixture: ComponentFixture<ItemsSellingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsSellingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsSellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
