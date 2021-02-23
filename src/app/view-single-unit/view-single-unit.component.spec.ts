import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSingleUnitComponent } from './view-single-unit.component';

describe('ViewSingleUnitComponent', () => {
  let component: ViewSingleUnitComponent;
  let fixture: ComponentFixture<ViewSingleUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSingleUnitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSingleUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
