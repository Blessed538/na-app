import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivsionEightComponent } from './divsion-eight.component';

describe('DivsionEightComponent', () => {
  let component: DivsionEightComponent;
  let fixture: ComponentFixture<DivsionEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivsionEightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivsionEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
