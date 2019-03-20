import { Component, OnInit, Input } from '@angular/core';
import { Wishlist } from '../wishlist.model';
import { Present } from '../present.model';
import { Subject } from 'rxjs'

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  @Input() public wishlist: Wishlist;

  public filterPresentName: string;
  public filterPresentName$ = new Subject<string>();

  constructor() {
    this.filterPresentName$.subscribe(val => (this.filterPresentName = val));
  }


  ngOnInit() {
  }

  addPresent(present: Present){
    this.wishlist.addPresent(present);
  }

  applyFilter(filter: string){
    this.filterPresentName = filter;
  }
}
