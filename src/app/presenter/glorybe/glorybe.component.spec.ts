import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlorybeComponent } from './glorybe.component';

describe('GlorybeComponent', () => {
  let component: GlorybeComponent;
  let fixture: ComponentFixture<GlorybeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlorybeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlorybeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
