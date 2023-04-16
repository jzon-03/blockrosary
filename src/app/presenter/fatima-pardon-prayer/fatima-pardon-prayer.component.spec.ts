import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatimaPardonPrayerComponent } from './fatima-pardon-prayer.component';

describe('FatimaPardonPrayerComponent', () => {
  let component: FatimaPardonPrayerComponent;
  let fixture: ComponentFixture<FatimaPardonPrayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatimaPardonPrayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FatimaPardonPrayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
