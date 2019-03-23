import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FilterPresentComponent } from './filter-present/filter-present.component';
import { EditPresentComponent } from './edit-present/edit-present.component';
import { PresentFilterPipe } from './present-filter.pipe';
import { WishlistComponent } from './wishlist/wishlist.component';
import { PresentComponent } from './present/present.component';
import { AddPresentComponent } from './add-present/add-present.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes = [
  { path: 'wishlist', component: WishlistComponent}
];

@NgModule({
  declarations: [
    WishlistComponent,
    PresentComponent,
    AddPresentComponent,
    PresentFilterPipe,
    FilterPresentComponent,
    EditPresentComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [HttpClientModule]
})
export class DashboardModule { }
