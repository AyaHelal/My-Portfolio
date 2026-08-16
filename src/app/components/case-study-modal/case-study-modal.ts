import { Component, input, output } from '@angular/core';
import { LucideX } from '@lucide/angular';
import { Project } from '../../data/portfolio.content';

@Component({
  selector: 'app-case-study-modal',
  imports: [LucideX],
  templateUrl: './case-study-modal.html',
  styleUrl: './case-study-modal.css',
})
export class CaseStudyModal {
  readonly project = input.required<Project>();
  readonly closed = output<void>();

  onBackdrop(event: MouseEvent): void {
    if (event.currentTarget === event.target) {
      this.closed.emit();
    }
  }
}
