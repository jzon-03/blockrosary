import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortVersionComponent } from './short-version.component';

describe('ShortVersionComponent', () => {
  let component: ShortVersionComponent;
  let fixture: ComponentFixture<ShortVersionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortVersionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
