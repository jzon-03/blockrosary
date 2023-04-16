import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrayerService {

  constructor(
    private _http:HttpClient
  ) { }

  mainPrayer(){
    return this._http.get("./assets/prayer.json")
  }
}
