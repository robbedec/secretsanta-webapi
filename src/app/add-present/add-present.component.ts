import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-present',
  templateUrl: './add-present.component.html',
  styleUrls: ['./add-present.component.css']
})
export class AddPresentComponent implements OnInit {
  @Output() public newPresent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  addPresent(presentName: HTMLInputElement): boolean {
    this.newPresent.emit(presentName.value);
    return false;
  }

}
