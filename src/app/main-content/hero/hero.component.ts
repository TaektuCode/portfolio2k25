import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  imageSrc: string = './assets/img/Passbild_skaliert.png';
  buttonText: string = 'Hello World';
  isLinkHovered: boolean = false;
  isHovered: boolean = false;

  changeButtonState(hover: boolean) {
    this.isHovered = hover;
  }

  changeImage(hover: boolean) {
    this.imageSrc = hover
      ? './assets/img/Passbild_skaliert.png'
      : './assets/img/Passbild_skaliert.png';
  }

  links: {
    name: string;
    image: string;
    http: string;
  }[] = [
    {
      name: 'LinkedIn',
      image: './assets/icons/linkedIn.svg',
      http: 'https://www.linkedin.com/in/alex-russotto-7a2r93/',
    },
    {
      name: 'Github',
      image: './assets/icons/Github.svg',
      http: 'https://github.com/TaektuCode',
    },
    {
      name: 'Mail',
      image: './assets/icons/mail.svg',
      http: 'mailto:russottoalex.studium@gmail.com',
    },
  ];

  changeLinkHoverState(hover: boolean) {
    this.isLinkHovered = hover;
  }
}
