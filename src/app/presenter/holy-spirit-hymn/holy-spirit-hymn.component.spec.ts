import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolySpiritHymnComponent } from './holy-spirit-hymn.component';

describe('HolySpiritHymnComponent', () => {
  let component: HolySpiritHymnComponent;
  let fixture: ComponentFixture<HolySpiritHymnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolySpiritHymnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolySpiritHymnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
