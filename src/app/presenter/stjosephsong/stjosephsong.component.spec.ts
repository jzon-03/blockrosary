import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StjosephsongComponent } from './stjosephsong.component';

describe('StjosephsongComponent', () => {
  let component: StjosephsongComponent;
  let fixture: ComponentFixture<StjosephsongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StjosephsongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StjosephsongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
