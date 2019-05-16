import { Component, OnInit, Input, Inject } from '@angular/core';
import { Group } from '../../../shared/models/group.model';
import { GroupDataService } from '../../../shared/services/group-data.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

export interface GroupData {
  /*groupName: string;
  maxPrice: number;
  partyDate: Date;*/
}

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  @Input() public group: Group;
  @Input() public groups: Group[];

  groupName: string;
  maxPrice: number;
  partyDate: Date;

  constructor(
    private router: Router,
    private groupDataService: GroupDataService,
    public dialog: MatDialog
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

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateGroupComponent, {
      width: '400px',
      data: {
        groupName: this.groupName,
        maxPrice: this.maxPrice,
        partyDate: this.partyDate
      }
    });
  }
}

@Component({
  selector: 'app-create-group-dialog',
  templateUrl: 'create-group-dialog.html'
})
export class CreateGroupComponent implements OnInit {
  public groupForm: FormGroup;
  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<CreateGroupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: GroupData,
    private fb: FormBuilder,
    private groupDataService: GroupDataService
  ) {}

  ngOnInit() {
    this.groupForm = this.fb.group({
      groupName: [null, Validators.required],
      maxPrice: [null, [Validators.required, Validators.min(0)]],
      partyDate: [null]
    });
  }

  onYesClick(): void {
    this.dialogRef.close();
    if (this.groupForm.valid) {
      this.groupDataService
        .addGroup(
          new Group(
            this.groupForm.value.groupName,
            this.groupForm.value.maxPrice,
            this.groupForm.value.partyDate,
            true
          )
        )
        .subscribe();
      this.router
        .navigateByUrl('/', { skipLocationChange: true })
        .then(() => this.router.navigate(['/dashboard']));
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
