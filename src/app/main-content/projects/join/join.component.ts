import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-join',
  standalone: true,
  imports: [RouterModule, TranslateDirective, TranslatePipe],
  templateUrl: './join.component.html',
  styleUrl: './join.component.scss',
})
export class JoinComponent {
  isHovered: boolean = false;
  showAnimation: boolean = false;

  showImage() {
    if (!this.showAnimation) {
      this.isHovered = true;
      this.showAnimation = true;

      setTimeout(() => {
        this.isHovered = false;
        this.showAnimation = false;
      }, 4000);
    }
  }
}
