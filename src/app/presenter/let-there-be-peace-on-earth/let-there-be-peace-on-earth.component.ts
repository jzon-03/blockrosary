import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LtbpoeVideoComponent } from './ltbpoe-video/ltbpoe-video.component';

@Component({
  selector: 'app-let-there-be-peace-on-earth',
  templateUrl: './let-there-be-peace-on-earth.component.html',
  styleUrls: ['./let-there-be-peace-on-earth.component.css']
})
export class LetThereBePeaceOnEarthComponent {

  constructor(
    private _dialog: MatDialog
  ){}

  playVideo(){
    this._dialog.open(LtbpoeVideoComponent)
  }
}
