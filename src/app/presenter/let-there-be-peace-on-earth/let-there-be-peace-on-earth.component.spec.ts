import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetThereBePeaceOnEarthComponent } from './let-there-be-peace-on-earth.component';

describe('LetThereBePeaceOnEarthComponent', () => {
  let component: LetThereBePeaceOnEarthComponent;
  let fixture: ComponentFixture<LetThereBePeaceOnEarthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetThereBePeaceOnEarthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetThereBePeaceOnEarthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
