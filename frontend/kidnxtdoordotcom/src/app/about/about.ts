import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about',
  imports: [CommonModule, FormsModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  constructor(private router: Router) {}

  isSignUpOpen: boolean = false;
  email: string = '';
  wants: string = '';

  goHome() {
    this.router.navigate(['']);
  }

  signUpOption() {
    this.isSignUpOpen = !this.isSignUpOpen;
  }

  sendInformation() {
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let receivesEmails = 'x@gmail.com'

    if (!regex.test(this.email)) {
      alert('Please enter a valid email address.');
      return;
    }
    if (this.wants.trim() === '') {
      alert('Please specify what you would like to sign up for.');
      return;
    }

    // add a backend here for emails to be submitted to

    this.email = '';
    this.wants = '';
    // Here you would typically send the data to your backend server
  }
}
