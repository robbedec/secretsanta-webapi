import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
//import { SelectivePreloadStrategy } from './selective-prefload-strategy';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: '**', component: PageNotFoundComponent},
  { path: 'dashboard', component: DashboardComponent }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
