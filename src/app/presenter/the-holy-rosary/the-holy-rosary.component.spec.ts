import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheHolyRosaryComponent } from './the-holy-rosary.component';

describe('TheHolyRosaryComponent', () => {
  let component: TheHolyRosaryComponent;
  let fixture: ComponentFixture<TheHolyRosaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheHolyRosaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheHolyRosaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
