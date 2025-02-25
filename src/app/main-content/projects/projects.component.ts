import { Component } from '@angular/core';
import { TranslatePipe, TranslateDirective } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-projects',
  imports: [TranslatePipe, TranslateDirective, RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  isHovered: boolean = false;
  activeProject: string | null = null;
  isAnimated: boolean = false;

  onMouseOver(projectName: string) {
    this.activeProject = projectName;
  }

  showImage() {
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
