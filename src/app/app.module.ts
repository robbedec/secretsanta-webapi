import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { PresentComponent } from './present/present.component';

@NgModule({
  declarations: [
    AppComponent,
    WishlistComponent,
    PresentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
