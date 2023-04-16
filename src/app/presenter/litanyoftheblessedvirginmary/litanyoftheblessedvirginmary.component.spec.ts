import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LitanyoftheblessedvirginmaryComponent } from './litanyoftheblessedvirginmary.component';

describe('LitanyoftheblessedvirginmaryComponent', () => {
  let component: LitanyoftheblessedvirginmaryComponent;
  let fixture: ComponentFixture<LitanyoftheblessedvirginmaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LitanyoftheblessedvirginmaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LitanyoftheblessedvirginmaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
