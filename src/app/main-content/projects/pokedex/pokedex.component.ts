import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [RouterModule, TranslatePipe, TranslateDirective],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.scss',
})
export class PokedexComponent {
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
