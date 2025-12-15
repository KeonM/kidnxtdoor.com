import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work',
  imports: [],
  templateUrl: './work.html',
  styleUrl: './work.css',
})
export class Work {

  constructor(private router: Router) {}
  
  goHome() {
    this.router.navigate(['']);
  }
}
