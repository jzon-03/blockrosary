import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheRosaryCrusadePrayerComponent } from './the-rosary-crusade-prayer.component';

describe('TheRosaryCrusadePrayerComponent', () => {
  let component: TheRosaryCrusadePrayerComponent;
  let fixture: ComponentFixture<TheRosaryCrusadePrayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheRosaryCrusadePrayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheRosaryCrusadePrayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
