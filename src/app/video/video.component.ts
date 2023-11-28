import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  @ViewChild('video', { static: true }) public video!: ElementRef
  constraints:MediaStreamConstraints = { audio: true, video: { width: 1280, height: 720 } };
  iphoneConstraints = {
    audio: false,
    video: {
      // width:{min:screenHeight*.95,ideal:screenHeight*.95,max:screenHeight*.95},
      // facingMode: {exact:"environment"}
      facingMode: {exact:environment.facingMode}
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
