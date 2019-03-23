import { Component, OnInit } from '@angular/core';
import {WishlistDataService } from '../../services/wishlist-data.service';
import { Observable, Subject } from 'rxjs';
import { Wishlist } from '../wishlist.model'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private _fetchWishlist$: Observable<Wishlist> = this._wishlistDataService.wishlist$;
  constructor(private _wishlistDataService: WishlistDataService) {}

  get wishlist$(): Observable<Wishlist> {
    return this._fetchWishlist$;
  }

  ngOnInit() {}

}
