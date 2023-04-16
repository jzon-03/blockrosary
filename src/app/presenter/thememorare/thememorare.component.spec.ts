import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThememorareComponent } from './thememorare.component';

describe('ThememorareComponent', () => {
  let component: ThememorareComponent;
  let fixture: ComponentFixture<ThememorareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThememorareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThememorareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
