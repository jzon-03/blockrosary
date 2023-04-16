import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmyjesusComponent } from './omyjesus.component';

describe('OmyjesusComponent', () => {
  let component: OmyjesusComponent;
  let fixture: ComponentFixture<OmyjesusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmyjesusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OmyjesusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
