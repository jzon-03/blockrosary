import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndofcovidComponent } from './endofcovid.component';

describe('EndofcovidComponent', () => {
  let component: EndofcovidComponent;
  let fixture: ComponentFixture<EndofcovidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndofcovidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndofcovidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
