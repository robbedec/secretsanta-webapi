import { Component, OnInit, Input } from '@angular/core';
import { Group } from '../group.model';
import { GroupDataService } from '../../../shared/services/group-data.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  @Input() public group: Group;
  @Input() public groups: Group[];
  constructor(private groupDataService: GroupDataService) {}

  ngOnInit() {}

  joinGroup(groupId: number) {
    this.groupDataService.joinGroup(groupId).subscribe();
    window.location.reload();
  }

  leaveGroup() {
    this.groupDataService.leaveGroup().subscribe();
    window.location.reload();
  }

  onSubmit() {}
}
