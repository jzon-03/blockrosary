import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheDivineMercyChapletComponent } from './the-divine-mercy-chaplet.component';

describe('TheDivineMercyChapletComponent', () => {
  let component: TheDivineMercyChapletComponent;
  let fixture: ComponentFixture<TheDivineMercyChapletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheDivineMercyChapletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheDivineMercyChapletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
