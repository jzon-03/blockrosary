import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StJosephSongVideoComponent } from './st-joseph-song-video/st-joseph-song-video.component';

@Component({
  selector: 'app-stjosephsong',
  templateUrl: './stjosephsong.component.html',
  styleUrls: ['./stjosephsong.component.css']
})
export class StjosephsongComponent implements OnInit {

  constructor(
    private _dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  playStJosephSong(){
    this._dialog.open(StJosephSongVideoComponent)
  }
}
