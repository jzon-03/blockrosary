import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApostlescreedComponent } from './apostlescreed.component';

describe('ApostlescreedComponent', () => {
  let component: ApostlescreedComponent;
  let fixture: ComponentFixture<ApostlescreedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApostlescreedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApostlescreedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
