import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayerofstgerttrudethegreatComponent } from './prayerofstgerttrudethegreat.component';

describe('PrayerofstgerttrudethegreatComponent', () => {
  let component: PrayerofstgerttrudethegreatComponent;
  let fixture: ComponentFixture<PrayerofstgerttrudethegreatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrayerofstgerttrudethegreatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrayerofstgerttrudethegreatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
