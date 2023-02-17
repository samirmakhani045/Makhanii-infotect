import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTestonimalComponent } from './add-testonimal.component';

describe('AddTestonimalComponent', () => {
  let component: AddTestonimalComponent;
  let fixture: ComponentFixture<AddTestonimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTestonimalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTestonimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
