import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  @ViewChild('video', { static: true }) public video!: ElementRef
  constraints = { audio: true, video: { width: 1280, height: 720 } };
  iphoneConstraints = {
    audio: false,
    video: {
      // width:{min:screenHeight*.95,ideal:screenHeight*.95,max:screenHeight*.95},
      facingMode: {exact:"environment"}
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.requestVideo()
  }

  requestVideo() {
    navigator.mediaDevices.getUserMedia(this.iphoneConstraints).then(stream => {
      this.video.nativeElement.srcObject = stream;
    }).catch(console.error)
  }

}
