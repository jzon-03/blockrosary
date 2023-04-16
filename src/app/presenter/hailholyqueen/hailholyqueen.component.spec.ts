import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HailholyqueenComponent } from './hailholyqueen.component';

describe('HailholyqueenComponent', () => {
  let component: HailholyqueenComponent;
  let fixture: ComponentFixture<HailholyqueenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HailholyqueenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HailholyqueenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
