import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isScrolling = false;
  isVisible = true; // Always visible at the start
  private scrollTimeout: number | undefined;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY;

    this.isScrolling = scrollTop > 0;
    this.isVisible = true; // Show navbar while scrolling

    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }

    // Only hide if scrolled down (not at the top)
    if (scrollTop > 0) {
      this.scrollTimeout = window.setTimeout(() => {
        this.isVisible = false; // Hide after 1.2s of no scrolling
      }, 1200);
    }
  }
}
