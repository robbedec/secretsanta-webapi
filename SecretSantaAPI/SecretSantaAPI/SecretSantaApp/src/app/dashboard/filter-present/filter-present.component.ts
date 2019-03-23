import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-present',
  templateUrl: './filter-present.component.html',
  styleUrls: ['./filter-present.component.css']
})
export class FilterPresentComponent implements OnInit {
  @Output() public newFilter = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  applyFilter(filter: HTMLInputElement): boolean {
    this.newFilter.emit(filter.value);
    return false;
  }

}
