import { Injectable } from '@angular/core';
import { WISHLISTS } from './mock-wishlists';
import { Wishlist } from './wishlist.model';

@Injectable({
  providedIn: 'root'
})
export class WishlistDataService {
  private _wishlists = WISHLISTS
  constructor() { }

  get wishlists(): Wishlist[] {
    return this._wishlists;
  }
}
