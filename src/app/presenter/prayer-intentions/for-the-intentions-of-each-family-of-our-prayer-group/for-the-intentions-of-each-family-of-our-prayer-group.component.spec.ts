import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForTheIntentionsOfEachFamilyOfOurPrayerGroupComponent } from './for-the-intentions-of-each-family-of-our-prayer-group.component';

describe('ForTheIntentionsOfEachFamilyOfOurPrayerGroupComponent', () => {
  let component: ForTheIntentionsOfEachFamilyOfOurPrayerGroupComponent;
  let fixture: ComponentFixture<ForTheIntentionsOfEachFamilyOfOurPrayerGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForTheIntentionsOfEachFamilyOfOurPrayerGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForTheIntentionsOfEachFamilyOfOurPrayerGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
