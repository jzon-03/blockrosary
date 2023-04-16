import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActOfConsecrationToTheSacredHeartComponent } from './act-of-consecration-to-the-sacred-heart.component';

describe('ActOfConsecrationToTheSacredHeartComponent', () => {
  let component: ActOfConsecrationToTheSacredHeartComponent;
  let fixture: ComponentFixture<ActOfConsecrationToTheSacredHeartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActOfConsecrationToTheSacredHeartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActOfConsecrationToTheSacredHeartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
