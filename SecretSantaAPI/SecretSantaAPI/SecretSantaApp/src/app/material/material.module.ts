import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatListModule, 
  MatCardModule, 
  MatIconModule, 
  MatExpansionModule, 
  MatFormFieldModule, 
  MatInputModule, 
  MatButtonModule, 
  MatToolbarModule, 
  MatSidenavModule, 
  MatSelectModule,
  MatOptionModule,
  MatGridListModule,
  MatProgressSpinnerModule,
  MatTabsModule,
  MatDividerModule,
  MatTableModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSelectModule,
    MatOptionModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
    LayoutModule,
    MatTabsModule,
    MatDividerModule,
    MatTableModule
  ],
  exports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSelectModule,
    MatOptionModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
    LayoutModule,
    MatTabsModule,
    MatDividerModule,
    MatTableModule
  ]
})
export class MaterialModule { }