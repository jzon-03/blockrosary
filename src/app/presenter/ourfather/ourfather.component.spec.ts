import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurfatherComponent } from './ourfather.component';

describe('OurfatherComponent', () => {
  let component: OurfatherComponent;
  let fixture: ComponentFixture<OurfatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurfatherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurfatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
