import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StJosephSongVideoComponent } from './st-joseph-song-video.component';

describe('StJosephSongVideoComponent', () => {
  let component: StJosephSongVideoComponent;
  let fixture: ComponentFixture<StJosephSongVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StJosephSongVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StJosephSongVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
