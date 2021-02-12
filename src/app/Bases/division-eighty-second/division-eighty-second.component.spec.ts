import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionEightySecondComponent } from './division-eighty-second.component';

describe('DivisionEightySecondComponent', () => {
  let component: DivisionEightySecondComponent;
  let fixture: ComponentFixture<DivisionEightySecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivisionEightySecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisionEightySecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
