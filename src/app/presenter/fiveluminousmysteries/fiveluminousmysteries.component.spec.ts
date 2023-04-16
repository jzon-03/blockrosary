import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveluminousmysteriesComponent } from './fiveluminousmysteries.component';

describe('FiveluminousmysteriesComponent', () => {
  let component: FiveluminousmysteriesComponent;
  let fixture: ComponentFixture<FiveluminousmysteriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiveluminousmysteriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveluminousmysteriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
