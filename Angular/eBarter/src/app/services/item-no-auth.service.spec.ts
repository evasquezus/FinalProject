import { TestBed } from '@angular/core/testing';

import { ItemNoAuthService } from './item-no-auth.service';

describe('ItemNoAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemNoAuthService = TestBed.get(ItemNoAuthService);
    expect(service).toBeTruthy();
  });
});
