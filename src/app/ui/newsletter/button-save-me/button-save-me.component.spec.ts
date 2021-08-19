import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSaveMeComponent } from './button-save-me.component';

describe('ButtonSaveMeComponent', () => {
  let component: ButtonSaveMeComponent;
  let fixture: ComponentFixture<ButtonSaveMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonSaveMeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonSaveMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
