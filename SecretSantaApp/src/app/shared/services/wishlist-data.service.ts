import { Injectable } from '@angular/core';
import { Wishlist } from '../../layout/dashboard/wishlist.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Present } from '../../layout/dashboard/present.model';

@Injectable({
  providedIn: 'root'
})
export class WishlistDataService {
  constructor(private http: HttpClient) {}

  get wishlist$(): Observable<Wishlist> {
    return this.http
      .get(`${environment.apiUrl}/wishlists`)
      .pipe(map(Wishlist.fromJSON));
  }

  updateWishlist(wishlist: Wishlist) {
    return this.http
      .put(`${environment.apiUrl}/wishlists/${wishlist.id}`, wishlist.toJSON())
      .pipe();
  }

  addPresent(wishlistId: number, present: Present) {
    return this.http
      .post(`${environment.apiUrl}/Presents/${wishlistId}`, present.toJSON())
      .pipe();
  }

  removePresent(presentId: number) {
    return this.http
      .delete(`${environment.apiUrl}/wishlists/removepresent/${presentId}`)
      .pipe();
  }
}
