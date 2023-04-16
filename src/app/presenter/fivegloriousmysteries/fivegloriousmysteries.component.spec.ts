import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FivegloriousmysteriesComponent } from './fivegloriousmysteries.component';

describe('FivegloriousmysteriesComponent', () => {
  let component: FivegloriousmysteriesComponent;
  let fixture: ComponentFixture<FivegloriousmysteriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FivegloriousmysteriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FivegloriousmysteriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
