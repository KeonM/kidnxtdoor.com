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
    '../../assets/images/dashboard-img.png',
    '../../assets/images/dashboard-img2.jfif',
    '../../assets/images/dashboard-img3.jfif',
    '../../assets/images/dashboard-img4.jfif',
    '../../assets/images/dashboard-img5.jfif',
  ];

  currentImage = this.images[0];
  private currentIndex = 0;
  private playSub: Subscription | null = null;
  private readonly intervalMs = 150;
  audioEnabled = false;
  showAudioPrompt = true;

  constructor(
    private cdr: ChangeDetectorRef,
    private router: Router,
  ) {}

  enableAudio() {
    this.audioEnabled = true;
    this.showAudioPrompt = false;
  }

  playMusic() {
    if (this.playSub && !this.playSub.closed) return;

    // Start audio playback only if enabled
    if (this.audioEnabled && this.audioPlayer) {
      this.audioPlayer.nativeElement.play().catch(err => {
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
    this.currentImage = this.images[0];
  }

  navigatePage(route: string) {
    this.router.navigate([route]);
  }

  ngOnDestroy() {
    if (this.playSub) this.playSub.unsubscribe();
  }
}