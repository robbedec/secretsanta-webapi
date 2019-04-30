import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { MaterialModule } from '../material/material.module'
import { AppRoutingModule } from '../app-routing.module';
import { MainNavComponent} from './main-nav/main-nav.component';
import { LayoutRoutingModule } from './layout-routing.module'
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [LayoutComponent, MainNavComponent],
  imports: [
    CommonModule,
    MaterialModule,
    LayoutRoutingModule,
    TranslateModule
  ]
})
export class LayoutModule { }
