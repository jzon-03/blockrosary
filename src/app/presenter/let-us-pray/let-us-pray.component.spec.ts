import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetUsPrayComponent } from './let-us-pray.component';

describe('LetUsPrayComponent', () => {
  let component: LetUsPrayComponent;
  let fixture: ComponentFixture<LetUsPrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetUsPrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetUsPrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
