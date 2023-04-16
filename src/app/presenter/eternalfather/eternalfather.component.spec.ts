import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EternalfatherComponent } from './eternalfather.component';

describe('EternalfatherComponent', () => {
  let component: EternalfatherComponent;
  let fixture: ComponentFixture<EternalfatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EternalfatherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EternalfatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
