import { Component ,input} from '@angular/core';
import { ProjectTheme } from '../../data/portfolio.content';

@Component({
  selector: 'app-project-visual',
  imports: [],
  templateUrl: './project-visual.html',
  styleUrl: './project-visual.css',
})
export class ProjectVisual {
  readonly theme = input.required<ProjectTheme>();
  readonly image = input.required<string>();
}
