import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Present } from '../present.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-present',
  templateUrl: './add-present.component.html',
  styleUrls: ['./add-present.component.css']
})
export class AddPresentComponent implements OnInit {
  @Output() public newPresent = new EventEmitter<Present>();
  public present: FormGroup;
  constructor() { }

  categories = ['music', 'electronics',
            'sports', 'outdoors'];

  ngOnInit() {
    this.present = new FormGroup({
      name: new FormControl(null, Validators.required),
      price: new FormControl(null, [Validators.required, Validators.min(1)]),
      category: new FormControl(null)
    })
  }

  onSubmit(){
    this.newPresent.emit(new Present(this.present.value.name, this.present.value.price));
  }

  addPresent(presentName: HTMLInputElement, presentPrice: HTMLInputElement): boolean {
    //this.newPresent.emit(new Present(presentName.value, presentPrice.valueAsNumber));
    return false;
  }
}
