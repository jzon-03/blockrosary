import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivinemercychapletComponent } from './divinemercychaplet.component';

describe('DevinemercychapletComponent', () => {
  let component: DivinemercychapletComponent;
  let fixture: ComponentFixture<DivinemercychapletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivinemercychapletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivinemercychapletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
