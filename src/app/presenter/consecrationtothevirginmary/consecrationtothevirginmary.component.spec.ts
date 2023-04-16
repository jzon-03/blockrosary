import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsecrationtothevirginmaryComponent } from './consecrationtothevirginmary.component';

describe('ConsecrationtothevirginmaryComponent', () => {
  let component: ConsecrationtothevirginmaryComponent;
  let fixture: ComponentFixture<ConsecrationtothevirginmaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsecrationtothevirginmaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsecrationtothevirginmaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
