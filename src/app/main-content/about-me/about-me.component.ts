import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  isAnimated: boolean = false;
  isHovered: boolean = false;

  showLine() {
    if (!this.isAnimated) {
      this.isHovered = true;
      this.isAnimated = true;

      setTimeout(() => {
        this.isHovered = false;
        this.isAnimated = false;
      }, 3200);
    }
  }
}
