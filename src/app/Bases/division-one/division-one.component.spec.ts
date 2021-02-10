import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionOneComponent } from './division-one.component';

describe('DivisionOneComponent', () => {
  let component: DivisionOneComponent;
  let fixture: ComponentFixture<DivisionOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivisionOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisionOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
