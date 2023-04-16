import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurladyoffatimaComponent } from './ourladyoffatima.component';

describe('OurladyoffatimaComponent', () => {
  let component: OurladyoffatimaComponent;
  let fixture: ComponentFixture<OurladyoffatimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurladyoffatimaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurladyoffatimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
