import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component'
import { AuthGuard } from './user/auth.guard';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [ AuthGuard ] },
  { path: ':username', component: ProfileComponent},
  { path: '', component: DashboardComponent, canActivate: [ AuthGuard ] },
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
