import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPresentComponent } from './edit-present.component';

describe('EditPresentComponent', () => {
  let component: EditPresentComponent;
  let fixture: ComponentFixture<EditPresentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPresentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPresentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
