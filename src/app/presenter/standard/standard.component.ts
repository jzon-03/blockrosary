import { Component } from '@angular/core';
import { SettingsComponent } from '../settings/settings.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-standard',
  templateUrl: './standard.component.html',
  styleUrls: ['./standard.component.css']
})
export class StandardComponent {

  // @ViewChild('label', {static:true}) public mys!:ElementRef<HTMLDivElement>
  mainPrayer:any
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
