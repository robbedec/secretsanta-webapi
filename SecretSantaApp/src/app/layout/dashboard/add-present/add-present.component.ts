import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Present } from '../present.model';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-add-present',
  templateUrl: './add-present.component.html',
  styleUrls: ['./add-present.component.css']
})
export class AddPresentComponent implements OnInit {
  @Output() public newPresent = new EventEmitter<Present>();
  public present: FormGroup;
  constructor(private fb: FormBuilder) {}

  public readonly categories = ['music', 'electronics', 'sports', 'outdoors'];

  ngOnInit() {
    this.present = this.fb.group({
      name: [null, Validators.required],
      price: [null, [Validators.required, Validators.min(1)]],
      category: [null]
    });
  }

  onSubmit() {
    this.newPresent.emit(
      new Present(this.present.value.name, this.present.value.price, 0)
    );
    this.present.reset();
  }

  resetForm() {
    this.present.reset();
  }
}
