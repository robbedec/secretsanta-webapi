import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatComponent } from './stat.component';
import { MatCardModule, MatGridListModule, MatIconModule } from '@angular/material'; 
 
@NgModule({
  declarations: [StatComponent],
  exports: [StatComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule
  ]
})
export class StatModule { }
