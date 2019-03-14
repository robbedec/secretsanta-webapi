import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-present',
  templateUrl: './present.component.html',
  styleUrls: ['./present.component.css']
})
export class PresentComponent implements OnInit {
  @Input() name: string;
  constructor() { }

  ngOnInit() {
  }

}
