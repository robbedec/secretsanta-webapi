import { TestBed } from '@angular/core/testing';

import { WishlistDataService } from './wishlist-data.service';

describe('WishlistDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WishlistDataService = TestBed.get(WishlistDataService);
    expect(service).toBeTruthy();
  });
});
