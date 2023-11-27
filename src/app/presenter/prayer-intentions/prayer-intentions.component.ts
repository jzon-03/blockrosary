import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-prayer-intentions',
  templateUrl: './prayer-intentions.component.html',
  styleUrls: ['./prayer-intentions.component.css']
})
export class PrayerIntentionsComponent implements OnInit {

  prayerIntentions:any[]=[]

  constructor(
    private _http:HttpClient
  ) {
    this._http.get("../../../" + environment.githubDomain + "assets/json/prayer-intentions.json").subscribe((res)=>{
      this.prayerIntentions = Object.values(res)
    })
  }

  ngOnInit(): void {
  }

}
