import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarewellprayerComponent } from './farewellprayer.component';

describe('FarewellprayerComponent', () => {
  let component: FarewellprayerComponent;
  let fixture: ComponentFixture<FarewellprayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarewellprayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarewellprayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
