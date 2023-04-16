import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayerIntentionsComponent } from './prayer-intentions.component';

describe('PrayerIntentionsComponent', () => {
  let component: PrayerIntentionsComponent;
  let fixture: ComponentFixture<PrayerIntentionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrayerIntentionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrayerIntentionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
