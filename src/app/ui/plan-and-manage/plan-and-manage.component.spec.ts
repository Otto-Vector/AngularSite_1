import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanAndManageComponent } from './plan-and-manage.component';

describe('PlanAndManageComponent', () => {
  let component: PlanAndManageComponent;
  let fixture: ComponentFixture<PlanAndManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanAndManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanAndManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
