import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDivisionComponent } from './register-division.component';

describe('RegisterDivisionComponent', () => {
  let component: RegisterDivisionComponent;
  let fixture: ComponentFixture<RegisterDivisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterDivisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterDivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
