import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionThreeComponent } from './division-three.component';

describe('DivisionThreeComponent', () => {
  let component: DivisionThreeComponent;
  let fixture: ComponentFixture<DivisionThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivisionThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisionThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
