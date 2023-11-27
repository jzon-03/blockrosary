import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LtbpoeVideoComponent } from './ltbpoe-video.component';

describe('LtbpoeVideoComponent', () => {
  let component: LtbpoeVideoComponent;
  let fixture: ComponentFixture<LtbpoeVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LtbpoeVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LtbpoeVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
