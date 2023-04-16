import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatimaprayerComponent } from './fatimaprayer.component';

describe('FatimaprayerComponent', () => {
  let component: FatimaprayerComponent;
  let fixture: ComponentFixture<FatimaprayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatimaprayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FatimaprayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
