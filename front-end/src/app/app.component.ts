import { Component } from '@angular/core';
import { WishlistDataService } from './wishlist-data.service';
import { Wishlist } from './wishlist.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private _wishlistDataService: WishlistDataService) {}

  get wishlists(): Wishlist[] {
    return this._wishlistDataService.wishlists;
  }

}
