import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(private router: Router) {}

  goToAbout() {
    this.router.navigate(['/about']);
  }

  goToContact() {
    this.router.navigate(['/contact']);
  }
}