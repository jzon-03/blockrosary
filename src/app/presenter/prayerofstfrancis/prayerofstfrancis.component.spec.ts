import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayerofstfrancisComponent } from './prayerofstfrancis.component';

describe('PrayerofstfrancisComponent', () => {
  let component: PrayerofstfrancisComponent;
  let fixture: ComponentFixture<PrayerofstfrancisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrayerofstfrancisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrayerofstfrancisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
