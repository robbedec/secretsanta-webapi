import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './layout/profile/profile/profile.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component'
import { AuthGuard } from './user/auth.guard';

const appRoutes: Routes = [
  //{ path: 'dashboard', loadChildren: './layout/layout.module#LayoutModule', canActivate: [ AuthGuard ] },
  //{ path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', canActivate: [ AuthGuard ] },
  { path: '', loadChildren: './layout/layout.module#LayoutModule', canActivate: [ AuthGuard ] },
  { path: 'login', loadChildren: './user/user.module#UserModule' },
 // { path: 'register', loadChildren: './user/user.module#RegisterModule' }
  { path: ':username', loadChildren: './layout/layout.module#LayoutModule' },
  
  /*{ path: '**', loadChildren: './page-not-found/'}*/
  
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
