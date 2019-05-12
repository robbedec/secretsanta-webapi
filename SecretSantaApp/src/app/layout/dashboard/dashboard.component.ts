import { Component, OnInit } from '@angular/core';
import { WishlistDataService } from '../../shared/services/wishlist-data.service';
import { GroupDataService } from '../../shared/services/group-data.service';
import { Observable, Subject } from 'rxjs';
import { Wishlist } from './wishlist.model';
import { Group } from './group.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private _fetchWishlist$: Observable<Wishlist> = this._wishlistDataService
    .wishlist$;
  private _fetchCurrentUserGroup$: Observable<Group> = this._groupDataService
    .currentUserGroup$;
  private _fetchGroups$: Observable<Group[]> = this._groupDataService.groups$;
  constructor(
    private _wishlistDataService: WishlistDataService,
    private _groupDataService: GroupDataService
  ) {}

  get wishlist$(): Observable<Wishlist> {
    return this._fetchWishlist$;
  }

  get currentUserGroup$(): Observable<Group> {
    return this._fetchCurrentUserGroup$;
  }

  get groups$() {
    return this._fetchGroups$;
  }

  ngOnInit() {}
}
