import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmaculatemotherComponent } from './immaculatemother.component';

describe('ImmaculatemotherComponent', () => {
  let component: ImmaculatemotherComponent;
  let fixture: ComponentFixture<ImmaculatemotherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImmaculatemotherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmaculatemotherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
