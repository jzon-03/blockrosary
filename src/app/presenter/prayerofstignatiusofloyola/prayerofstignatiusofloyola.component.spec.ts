import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayerofstignatiusofloyolaComponent } from './prayerofstignatiusofloyola.component';

describe('PrayerofstignatiusofloyolaComponent', () => {
  let component: PrayerofstignatiusofloyolaComponent;
  let fixture: ComponentFixture<PrayerofstignatiusofloyolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrayerofstignatiusofloyolaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrayerofstignatiusofloyolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
