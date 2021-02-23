import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSingleDivisionComponent } from './view-single-division.component';

describe('ViewSingleDivisionComponent', () => {
  let component: ViewSingleDivisionComponent;
  let fixture: ComponentFixture<ViewSingleDivisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSingleDivisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSingleDivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
