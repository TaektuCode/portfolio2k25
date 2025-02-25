import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-references',
  imports: [CommonModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',
})
export class ReferencesComponent {
  cards: {
    name: string;
    image: string;
    linkedIn: string;
    text: string;
    job: string;
  }[] = [
    {
      name: 'Jannik',
      image: './assets/graphics/references/cardA.png',
      linkedIn: 'http/*',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.accusantium adipisci reprehenderit unde et!',
      job: 'Frontend Developer',
    },
    {
      name: 'Lea',
      image: './assets/graphics/references/cardB.png',
      linkedIn: 'http/*',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.accusantium adipisci reprehenderit unde et!',
      job: 'Designer',
    },
    {
      name: 'Jens',
      image: './assets/graphics/references/cardA.png',
      linkedIn: 'http/*',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.accusantium adipisci reprehenderit unde et!',
      job: 'Project Manager',
    },
  ];
}
