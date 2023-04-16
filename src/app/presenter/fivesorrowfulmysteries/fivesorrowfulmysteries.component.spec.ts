import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FivesorrowfulmysteriesComponent } from './fivesorrowfulmysteries.component';

describe('FivesorrowfulmysteriesComponent', () => {
  let component: FivesorrowfulmysteriesComponent;
  let fixture: ComponentFixture<FivesorrowfulmysteriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FivesorrowfulmysteriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FivesorrowfulmysteriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
