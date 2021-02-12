import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionEightyOneComponent } from './division-eighty-one.component';

describe('DivisionEightyOneComponent', () => {
  let component: DivisionEightyOneComponent;
  let fixture: ComponentFixture<DivisionEightyOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivisionEightyOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisionEightyOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
