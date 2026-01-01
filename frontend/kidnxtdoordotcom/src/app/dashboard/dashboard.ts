import { CommonModule } from '@angular/common';
import { Component, OnDestroy, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnDestroy {
  @ViewChild('audioPlayer', { static: false }) audioPlayer!: ElementRef<HTMLAudioElement>;

  images: string[] = [
    '../../assets/images/dashboard/white/knd1.png',
    '../../assets/images/dashboard/white/knd2.png',
    '../../assets/images/dashboard/white/knd3.png',
    '../../assets/images/dashboard/white/knd4.png',
    '../../assets/images/dashboard/white/knd5.png',
    '../../assets/images/dashboard/white/knd6.png',
    '../../assets/images/dashboard/white/knd7.png',
    '../../assets/images/dashboard/white/knd8.png',
    '../../assets/images/dashboard/white/knd9.png',
    '../../assets/images/dashboard/white/knd10.png',
    '../../assets/images/dashboard/white/knd11.png',
    '../../assets/images/dashboard/white/knd12.png',
    '../../assets/images/dashboard/white/knd13.png',
    '../../assets/images/dashboard/white/knd14.png',
    '../../assets/images/dashboard/white/knd15.png',
    '../../assets/images/dashboard/white/knd16.png',
    '../../assets/images/dashboard/white/knd17.png',
    '../../assets/images/dashboard/white/knd18.png',
  ];

  currentImage = '../../assets/images/dashboard/white/knd13.png';
  private currentIndex = 0;
  private playSub: Subscription | null = null;
  private readonly intervalMs = 150;
  audioEnabled = false;
  showAudioPrompt = true;
  doorClosed = true;

  constructor(private cdr: ChangeDetectorRef, private router: Router) {}

  doorControls() {
    this.doorClosed = !this.doorClosed;
  }

  openIG() {
    window.open('https://www.instagram.com/prod.kidnxtdoor/', '_blank');
  }

  enableAudio() {
    this.audioEnabled = true;
    this.showAudioPrompt = false;
  }

  playMusic() {
    if (this.playSub && !this.playSub.closed) return;

    // Start audio playback only if enabled
    if (this.audioEnabled && this.audioPlayer) {
      this.audioPlayer.nativeElement.play().catch((err) => {
        console.error('Audio play failed:', err);
      });
    }

    this.playSub = interval(this.intervalMs).subscribe(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.currentImage = this.images[this.currentIndex];
      this.cdr.detectChanges();
    });
  }

  stopMusic() {
    if (this.playSub) {
      this.playSub.unsubscribe();
      this.playSub = null;
    }

    if (this.audioEnabled && this.audioPlayer) {
      this.audioPlayer.nativeElement.pause();
      this.audioPlayer.nativeElement.currentTime = 0;
    }

    this.currentIndex = 0;
    this.currentImage = '../../assets/images/dashboard/white/knd13.png';
  }

  navigatePage(route: string) {
    this.router.navigate([route]);
  }

  ngOnDestroy() {
    if (this.playSub) this.playSub.unsubscribe();
  }
}
