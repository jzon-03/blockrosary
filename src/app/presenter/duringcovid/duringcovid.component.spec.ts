import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuringcovidComponent } from './duringcovid.component';

describe('DuringcovidComponent', () => {
  let component: DuringcovidComponent;
  let fixture: ComponentFixture<DuringcovidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuringcovidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuringcovidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
