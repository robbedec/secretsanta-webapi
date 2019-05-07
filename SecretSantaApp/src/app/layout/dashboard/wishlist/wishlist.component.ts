import { Component, OnInit, Input } from '@angular/core';
import { Wishlist } from '../wishlist.model';
import { Present } from '../present.model';
import { Subject } from 'rxjs'
import { distinctUntilChanged, map } from 'rxjs/operators';
import {WishlistDataService } from '../../../shared/services/wishlist-data.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  @Input() public wishlist: Wishlist;

  public filterPresentName: string;
  public filterPresentName$ = new Subject<string>();

  constructor(private _dataService: WishlistDataService) {
    this.filterPresentName$
    .pipe(
      distinctUntilChanged(),
      map(val => val.toLowerCase())
    )
    .subscribe(val => (this.filterPresentName = val));
  }

  ngOnInit() {
  }

  addPresent(present: Present){

    this.wishlist.addPresent(present);
    this._dataService.addPresent(this.wishlist.id, present).subscribe();
  }

  applyFilter(filter: string){
    this.filterPresentName = filter;
  }
}
