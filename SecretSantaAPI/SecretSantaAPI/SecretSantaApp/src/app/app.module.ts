import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/*import { MainNavComponent } from './main-nav/main-nav.component';*/
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './layout/dashboard/dashboard.module';
import { MaterialModule } from './material/material.module';
//import { ProfileModule } from './profile/profile.module';
import { UserModule } from './user/user.module';
import { httpInterceptorProviders } from './interceptors'




@NgModule({
  declarations: [
    AppComponent,
    /*MainNavComponent,*/
    /*PageNotFoundComponent*/
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    UserModule,
    LayoutModule,
    DashboardModule,
    //ProfileModule,
    AppRoutingModule
    

  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
