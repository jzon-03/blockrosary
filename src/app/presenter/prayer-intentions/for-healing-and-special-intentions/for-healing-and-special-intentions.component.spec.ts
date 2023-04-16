import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForHealingAndSpecialIntentionsComponent } from './for-healing-and-special-intentions.component';

describe('ForHealingAndSpecialIntentionsComponent', () => {
  let component: ForHealingAndSpecialIntentionsComponent;
  let fixture: ComponentFixture<ForHealingAndSpecialIntentionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForHealingAndSpecialIntentionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForHealingAndSpecialIntentionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
