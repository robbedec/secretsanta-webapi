import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile/profile.component';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: ':username', component: ProfileComponent},
  { path: '', component: DashboardComponent },
  { path: '**', component: PageNotFoundComponent}
  
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
