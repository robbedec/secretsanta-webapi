import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user.model';
import { Present } from 'src/app/dashboard/present.model';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  @Input() public user: User;
  displayedColumns: string[] = ["Name", "Price", "Category"];
  dataSource: Present[];
  
  constructor() { 
  }

  ngOnInit() {
    this.dataSource = this.user.wishlist.presents;
  }

}
