import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForOurDepartedLovedOnesComponent } from './for-our-departed-loved-ones.component';

describe('ForOurDepartedLovedOnesComponent', () => {
  let component: ForOurDepartedLovedOnesComponent;
  let fixture: ComponentFixture<ForOurDepartedLovedOnesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForOurDepartedLovedOnesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForOurDepartedLovedOnesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
