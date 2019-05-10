import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Present } from '../present.model';

@Component({
  selector: 'app-present',
  templateUrl: './present.component.html',
  styleUrls: ['./present.component.css']
})
export class PresentComponent implements OnInit {
  @Input() present: Present;
  @Output() public presentAction = new EventEmitter<Present>();
  constructor() {}

  public readonly categories = ['music', 'electronics', 'sports', 'outdoors'];

  ngOnInit() {}

  remove() {
    this.presentAction.emit(this.present);
  }
}
