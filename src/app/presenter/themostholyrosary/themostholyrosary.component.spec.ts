import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemostholyrosaryComponent } from './themostholyrosary.component';

describe('ThemostholyrosaryComponent', () => {
  let component: ThemostholyrosaryComponent;
  let fixture: ComponentFixture<ThemostholyrosaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemostholyrosaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemostholyrosaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
