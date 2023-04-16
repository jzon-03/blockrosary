import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayertostmichaelComponent } from './prayertostmichael.component';

describe('PrayertostmichaelComponent', () => {
  let component: PrayertostmichaelComponent;
  let fixture: ComponentFixture<PrayertostmichaelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrayertostmichaelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrayertostmichaelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
