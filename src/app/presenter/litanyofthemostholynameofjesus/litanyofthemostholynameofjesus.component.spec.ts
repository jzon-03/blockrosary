import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LitanyofthemostholynameofjesusComponent } from './litanyofthemostholynameofjesus.component';

describe('LitanyofthemostholynameofjesusComponent', () => {
  let component: LitanyofthemostholynameofjesusComponent;
  let fixture: ComponentFixture<LitanyofthemostholynameofjesusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LitanyofthemostholynameofjesusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LitanyofthemostholynameofjesusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
