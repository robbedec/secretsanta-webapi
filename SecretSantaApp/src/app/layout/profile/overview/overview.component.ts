import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../shared/models/user.model';
import { Present } from '../../../shared/models/present.model';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  @Input() public user: User;
  public readonly categories = ['music', 'electronics', 'sports', 'outdoors'];

  dataSource: Present[];

  constructor() {}

  ngOnInit() {
    this.dataSource = this.user.wishlist.presents;
  }
}
