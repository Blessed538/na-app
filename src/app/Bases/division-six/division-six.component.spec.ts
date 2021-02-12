import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionSixComponent } from './division-six.component';

describe('DivisionSixComponent', () => {
  let component: DivisionSixComponent;
  let fixture: ComponentFixture<DivisionSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivisionSixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisionSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
