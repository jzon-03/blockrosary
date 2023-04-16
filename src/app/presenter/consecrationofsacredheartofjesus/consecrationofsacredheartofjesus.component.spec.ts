import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsecrationofsacredheartofjesusComponent } from './consecrationofsacredheartofjesus.component';

describe('ConsecrationofsacredheartofjesusComponent', () => {
  let component: ConsecrationofsacredheartofjesusComponent;
  let fixture: ComponentFixture<ConsecrationofsacredheartofjesusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsecrationofsacredheartofjesusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsecrationofsacredheartofjesusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
