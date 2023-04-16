import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { PrayerService } from '../services/prayer.service';
import {UntypedFormBuilder, UntypedFormControl, UntypedFormGroup} from '@angular/forms';
import { DOCUMENT } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { SettingsComponent } from './settings/settings.component';

@Component({
  selector: 'app-presenter',
  templateUrl: './presenter.component.html',
  styleUrls: ['./presenter.component.css']
})
export class PresenterComponent implements OnInit {

  // @ViewChild('label', {static:true}) public mys!:ElementRef<HTMLDivElement>
  mainPrayer:any
  options!:UntypedFormGroup
  mystery = 1;

  name: any;
  timeoutHandler: any;

  constructor(
  private _dialog:MatDialog
    ) { }

  ngOnInit(): void {
  }

  scrollToElement($element:any): void {
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }


  public mouseup() {
    if (this.timeoutHandler) {
      clearTimeout(this.timeoutHandler);
      this.name = "canceled";
      this.timeoutHandler = null;
    this._dialog.open(SettingsComponent)
    }
  }

  openSettings(){
    this.timeoutHandler = setTimeout(() => {
      this.name = "has been long pressed"
      this.timeoutHandler = null;
    }, 200);
  }
}
