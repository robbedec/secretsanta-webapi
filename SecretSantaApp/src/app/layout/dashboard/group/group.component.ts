import { Component, OnInit, Input } from '@angular/core';
import { Group } from '../../../shared/models/group.model';
import { GroupDataService } from '../../../shared/services/group-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  @Input() public group: Group;
  @Input() public groups: Group[];
  constructor(
    private router: Router,
    private groupDataService: GroupDataService
  ) {}

  ngOnInit() {}

  joinGroup(groupId: number) {
    this.groupDataService.joinGroup(groupId).subscribe();
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate(['/dashboard']));
  }

  leaveGroup() {
    this.groupDataService.leaveGroup().subscribe();
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate(['/dashboard']));
  }

  isEmptyObject(obj) {
    return !(obj && Object.keys(obj).length === 0);
  }
}
