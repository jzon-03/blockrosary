import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  innerWidth = window.innerWidth;
  adjustVideoWidth: number = window.innerWidth;

  @ViewChild('video', { static: true }) public video!: ElementRef
  iphoneConstraints: MediaStreamConstraints = {
    audio: false,
    video: {
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
