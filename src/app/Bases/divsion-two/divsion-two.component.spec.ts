import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivsionTwoComponent } from './divsion-two.component';

describe('DivsionTwoComponent', () => {
  let component: DivsionTwoComponent;
  let fixture: ComponentFixture<DivsionTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivsionTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivsionTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
