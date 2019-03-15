import { Component } from '@angular/core';
import { WISHLISTS } from './mock-wishlists';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'secretsanta';
  wishlists = WISHLISTS;
  constructor() {}
}
