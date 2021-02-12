import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivsionSevenComponent } from './divsion-seven.component';

describe('DivsionSevenComponent', () => {
  let component: DivsionSevenComponent;
  let fixture: ComponentFixture<DivsionSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivsionSevenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivsionSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
