import { Component, OnInit, Input } from '@angular/core';
import { Wishlist } from '../wishlist.model';
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

  addPresent(name: string){
    this.wishlist.addPresent(name);
  }

  applyFilter(filter: string){
    this.filterPresentName = filter;
  }
}
