import { Component, OnInit, Input } from '@angular/core';
import { Wishlist } from '../wishlist.model';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  @Input() public wishlist: Wishlist;

  constructor() {}

  public filterPresentName: string;

  ngOnInit() {
  }

  addPresent(name: string){
    this.wishlist.addPresent(name);
  }

  applyFilter(filter: string){
    this.filterPresentName = filter;
  }
}
