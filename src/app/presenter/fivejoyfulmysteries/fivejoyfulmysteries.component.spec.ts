import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FivejoyfulmysteriesComponent } from './fivejoyfulmysteries.component';

describe('FivejoyfulmysteriesComponent', () => {
  let component: FivejoyfulmysteriesComponent;
  let fixture: ComponentFixture<FivejoyfulmysteriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FivejoyfulmysteriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FivejoyfulmysteriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
