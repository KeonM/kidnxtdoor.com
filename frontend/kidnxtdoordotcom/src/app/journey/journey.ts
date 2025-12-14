import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-journey',
  imports: [],
  templateUrl: './journey.html',
  styleUrl: './journey.css',
})
export class Journey {

  constructor(private router: Router) {}

  goHome(){
    this.router.navigate(['']);
  }

  playVideo(videoElement: HTMLVideoElement) {
    videoElement.play();
  }

  stopVideo(videoElement: HTMLVideoElement) {
    videoElement.pause();
  }
}
