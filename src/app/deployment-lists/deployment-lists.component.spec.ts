import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeploymentListsComponent } from './deployment-lists.component';

describe('DeploymentListsComponent', () => {
  let component: DeploymentListsComponent;
  let fixture: ComponentFixture<DeploymentListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeploymentListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeploymentListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
