import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { ReferencesComponent } from './references/references.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from '../shared-components/footer/footer.component';

@Component({
  selector: 'app-main-content',
  imports: [
    HeroComponent,
    AboutMeComponent,
    SkillsComponent,
    ReferencesComponent,
    ContactComponent,
    ProjectsComponent,
    FooterComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {}
