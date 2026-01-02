import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SendInformation } from '../services/send-information';

@Component({
  selector: 'app-about',
  imports: [CommonModule, FormsModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  // constructor(private router: Router, private infoService: SendInformation) {}
  constructor(private router: Router) {}


  isSignUpOpen: boolean = false;
  email: string = '';
  wants: string = '';

  goHome() {
    this.router.navigate(['']);
  }

  toggleDiscord() {
    window.open('https://discord.gg/zq7mPqDSyP', '_blank');
  }

  signUpOption() {
    this.isSignUpOpen = !this.isSignUpOpen;
  }

  // async sendInformation() {
  //   let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  //   if (!regex.test(this.email)) {
  //     alert('Please enter a valid email address.');
  //     return;
  //   }
  //   if (this.wants.trim() === '') {
  //     alert('Please specify what you would like to sign up for.');
  //     return;
  //   }

  //   try {
  //     await this.infoService.sendInformation(this.email, this.wants);
  //     alert(`Thank you for signing up! I'll send "${this.wants}" to ${this.email}.`);
  //     this.email = '';
  //     this.wants = '';
  //     this.isSignUpOpen = false;
  //   } catch (error) {
  //     alert('Error submitting your information. Please try again.');
  //     console.error(error);
  //   }
  // }
}