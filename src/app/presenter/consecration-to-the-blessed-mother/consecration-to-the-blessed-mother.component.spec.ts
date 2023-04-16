import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsecrationToTheBlessedMotherComponent } from './consecration-to-the-blessed-mother.component';

describe('ConsecrationToTheBlessedMotherComponent', () => {
  let component: ConsecrationToTheBlessedMotherComponent;
  let fixture: ComponentFixture<ConsecrationToTheBlessedMotherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsecrationToTheBlessedMotherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsecrationToTheBlessedMotherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
