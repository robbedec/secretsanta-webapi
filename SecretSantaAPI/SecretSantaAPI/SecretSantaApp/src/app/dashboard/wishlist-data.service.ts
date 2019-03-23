import { Injectable } from '@angular/core';
import { Wishlist } from './wishlist.model';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable, Subject} from 'rxjs'
import { map, catchError, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class WishlistDataService {
  constructor(private http: HttpClient) { }

  get wishlist$(): Observable<Wishlist> {
    //return this._wishlists;
    return this.http.get(`${environment.apiUrl}/wishlists`).pipe(map(Wishlist.fromJSON));
  }
}
