import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PrayerIntentionsComponent } from '../prayer-intentions/prayer-intentions.component';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor(
    private _dialog: MatDialog
  ) { }
  openingPrayers=[
    {speaker:"ALL:", speech:"In the name of the Father, and of the Son and of the Holy Spirit. Come Holy Spirit, fill the hearts of Thy faithful and enkindle in them the fire of Thy love."},
    {speaker:"Leader:", speech:"Send forth Thy Spirit and they shall be created."},
    {speaker:"ALL:", speech:"And Thou shalt renew the face of the earth."}
  ]

  ngOnInit(): void {
  }

  openPrayerIntentions(){
    this._dialog.open(PrayerIntentionsComponent)
  }

}
