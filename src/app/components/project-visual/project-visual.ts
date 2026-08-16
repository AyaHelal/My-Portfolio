import { Component ,input} from '@angular/core';
import { LucideCheck, LucideMonitorPlay } from '@lucide/angular';
import { ProjectTheme } from '../../data/portfolio.content';

@Component({
  selector: 'app-project-visual',
  imports: [LucideCheck, LucideMonitorPlay],
  templateUrl: './project-visual.html',
  styleUrl: './project-visual.css',
})
export class ProjectVisual {
  readonly theme = input.required<ProjectTheme>();
  readonly featured = input(false);
}
