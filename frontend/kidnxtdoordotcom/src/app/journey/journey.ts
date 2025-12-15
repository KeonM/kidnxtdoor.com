import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-journey',
  imports: [CommonModule],
  templateUrl: './journey.html',
  styleUrl: './journey.css',
})
export class Journey implements OnInit {
  constructor(private router: Router, private cdr: ChangeDetectorRef) {}

  openModal: boolean = false;
  isLoading: boolean = true;
  currVid: string = '';

  ngOnInit(): void {
    this.preloadVideos();
  }

  preloadVideos(): void {
    const videoSources = [
      // Journey 1
      '../../assets/video/journey1/J1.mp4',
      '../../assets/video/journey1/O1.mp4',
      '../../assets/video/journey1/U1.mp4',
      '../../assets/video/journey1/R1.mp4',
      '../../assets/video/journey1/N1.mp4',
      '../../assets/video/journey1/E1.mp4',
      '../../assets/video/journey1/Y1.mp4',
      // Journey 2
      // '../../assets/video/journey2/J2.mp4',
      // '../../assets/video/journey2/O2.mp4',
      // '../../assets/video/journey2/U2.mp4',
      // '../../assets/video/journey2/R2.mp4',
      // '../../assets/video/journey2/N2.mp4',
      // '../../assets/video/journey2/E2.mp4',
      // '../../assets/video/journey2/Y2.mp4',
      // // Journey 3
      // '../../assets/video/journey3/J3.mp4',
      // '../../assets/video/journey3/O3.mp4',
      // '../../assets/video/journey3/U3.mp4',
      // '../../assets/video/journey3/R3.mp4',
      // '../../assets/video/journey3/N3.mp4',
      // '../../assets/video/journey3/E3.mp4',
      // '../../assets/video/journey3/Y3.mp4',
    ];

    const loadPromises = videoSources.map(src => {
      return new Promise((resolve, reject) => {
        const video = document.createElement('video');
        video.onloadeddata = () => resolve(src);
        video.onerror = () => reject(src);
        video.src = src;
        video.load();
      });
    });

    Promise.all(loadPromises)
      .then(() => {
        console.log(loadPromises.length + ' videos loaded successfully.');
        this.isLoading = false;
        this.cdr.detectChanges();
        console.log(this.isLoading);
      })
      .catch(err => {
        console.error('Error loading videos:', err);
        this.isLoading = false; // Show content anyway
      });
  }

  goHome() {
    this.router.navigate(['']);
  }

  playVideo(videoElement: HTMLVideoElement) {
    videoElement.play();
  }

  stopVideo(videoElement: HTMLVideoElement) {
    videoElement.pause();
  }

  videoModal(videoUrl: string) {
    this.openModal = !this.openModal;
    this.currVid = videoUrl; 
  }
}
