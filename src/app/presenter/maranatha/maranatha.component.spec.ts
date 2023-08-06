import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaranathaComponent } from './maranatha.component';

describe('MaranathaComponent', () => {
  let component: MaranathaComponent;
  let fixture: ComponentFixture<MaranathaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaranathaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaranathaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
