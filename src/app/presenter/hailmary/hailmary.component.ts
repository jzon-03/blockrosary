import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hailmary',
  templateUrl: './hailmary.component.html',
  styleUrls: ['./hailmary.component.css']
})
export class HailmaryComponent implements OnInit {

  @Input("data") data:any
  constructor() { }

  ngOnInit(): void {
  }

}
