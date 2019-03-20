import { Component, OnInit, Input } from '@angular/core';
import { Present } from '../present.model';

@Component({
  selector: 'app-present',
  templateUrl: './present.component.html',
  styleUrls: ['./present.component.css']
})
export class PresentComponent implements OnInit {
  @Input() present: Present;
  constructor() { }

  ngOnInit() {
  }

}
