import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { OverviewComponent } from './overview/overview.component';
import { MaterialModule } from '../material/material.module';
import { DashboardModule } from '../dashboard/dashboard.module';

@NgModule({
  declarations: [ProfileComponent, OverviewComponent],
  imports: [
    CommonModule,
    MaterialModule,
  ]
})
export class ProfileModule { }
