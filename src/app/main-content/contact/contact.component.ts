import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  isHovered: boolean = false;
  isAnimated: boolean = false;

  showGraphic() {
    if (!this.isAnimated) {
      this.isHovered = true;
      this.isAnimated = true;

      setTimeout(() => {
        this.isHovered = false;
        this.isAnimated = false;
      }, 2000);
    }
  }
}
