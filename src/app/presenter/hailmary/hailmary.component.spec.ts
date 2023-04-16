import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HailmaryComponent } from './hailmary.component';

describe('HailmaryComponent', () => {
  let component: HailmaryComponent;
  let fixture: ComponentFixture<HailmaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HailmaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HailmaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
