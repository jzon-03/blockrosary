import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayertotheholyspiritComponent } from './prayertotheholyspirit.component';

describe('PrayertotheholyspiritComponent', () => {
  let component: PrayertotheholyspiritComponent;
  let fixture: ComponentFixture<PrayertotheholyspiritComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrayertotheholyspiritComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrayertotheholyspiritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
