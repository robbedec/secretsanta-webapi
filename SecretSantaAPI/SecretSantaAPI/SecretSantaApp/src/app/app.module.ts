import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { PresentComponent } from './present/present.component';
import { AddPresentComponent } from './add-present/add-present.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule, MatCardModule, MatIconModule, MatExpansionModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatSelectModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PresentFilterPipe } from './present-filter.pipe';
import { FilterPresentComponent } from './filter-present/filter-present.component';
import { EditPresentComponent } from './edit-present/edit-present.component';

@NgModule({
  declarations: [
    AppComponent,
    WishlistComponent,
    PresentComponent,
    AddPresentComponent,
    PresentFilterPipe,
    FilterPresentComponent,
    EditPresentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    HttpClientModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
